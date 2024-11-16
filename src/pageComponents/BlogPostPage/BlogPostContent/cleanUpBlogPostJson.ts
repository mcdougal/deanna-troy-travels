import {
  Block,
  BLOCKS,
  Document,
  Inline,
  INLINES,
  Node,
  Text,
} from '@contentful/rich-text-types';

const isBlock = (node: Node): node is Block => {
  return Object.values(BLOCKS).includes(node.nodeType as BLOCKS);
};

const isInline = (node: Node): node is Inline => {
  return Object.values(INLINES).includes(node.nodeType as INLINES);
};

const isText = (node: Node): node is Text => {
  return node.nodeType === `text`;
};

const cleanUpParagraph = (paragraph: Block): Array<Block> => {
  const newParagraphs: Array<Block> = [];

  let currParagraph: Block = { ...paragraph, content: [] };
  newParagraphs.push(currParagraph);

  paragraph.content.forEach((n) => {
    if (!isText(n)) {
      currParagraph.content.push(n);
      return;
    }

    if (!n.value.includes(`\n`)) {
      if (n.value) {
        currParagraph.content.push(n);
      }
      return;
    }

    const paragraphTexts = n.value.replace(/[\n]+/g, `\n`).split(`\n`);

    paragraphTexts.forEach((paragraphText, i) => {
      if (i === 0) {
        if (paragraphText) {
          currParagraph.content.push({ ...n, value: paragraphText });
        }
        currParagraph = { ...paragraph, content: [] };
        newParagraphs.push(currParagraph);
      } else if (i === paragraphTexts.length - 1) {
        if (paragraphText) {
          currParagraph.content.push({ ...n, value: paragraphText });
        } else {
          currParagraph = { ...paragraph, content: [] };
          newParagraphs.push(currParagraph);
        }
      } else {
        newParagraphs.push({
          ...paragraph,
          content: [{ ...n, value: paragraphText }],
        });
        currParagraph = { ...paragraph, content: [] };
        newParagraphs.push(currParagraph);
      }
    });
  });

  return newParagraphs.filter((p) => {
    return p.content.length > 0;
  });
};

const cleanUpNode = <T extends Document | Block | Inline>(node: T): T => {
  const newContent: Array<Node> = [];

  node.content.forEach((n) => {
    if (isBlock(n) && n.nodeType === BLOCKS.PARAGRAPH) {
      const newParagraphs = cleanUpParagraph(n);
      newContent.push(...newParagraphs);
    } else if (isBlock(n) || isInline(n)) {
      const newNode = cleanUpNode(n);
      if (
        newNode.nodeType === BLOCKS.EMBEDDED_ASSET ||
        newNode.nodeType === BLOCKS.EMBEDDED_ENTRY ||
        newNode.nodeType === BLOCKS.HR ||
        newNode.nodeType === INLINES.EMBEDDED_ENTRY ||
        newNode.content.length > 0
      ) {
        newContent.push(newNode);
      }
    } else if (isText(n) && n.value.trim()) {
      newContent.push(n);
    }
  });

  return { ...node, content: newContent };
};

export default (node: Document): Document => {
  return cleanUpNode(node);
};
