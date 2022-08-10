import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Block, BLOCKS, Inline, INLINES } from '@contentful/rich-text-types';
import React from 'react';

import { BlogPost } from '../getStaticProps';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HyperLink,
  ListItem,
  OlList,
  Paragraph,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  Text,
  UlList,
} from './richTextComponents';

type RichTextRenderFunction = (
  node: Block | Inline,
  children: React.ReactNode,
) => React.ReactNode;

type RichTextElementComponent = (props: {
  children: React.ReactNode;
  node: Block | Inline;
}) => JSX.Element;

const getRichTextElementRenderer = (
  Component: RichTextElementComponent,
): RichTextRenderFunction => {
  // eslint-disable-next-line react/display-name
  return (node, children) => {
    return <Component node={node}>{children}</Component>;
  };
};

interface Props {
  blogPost: BlogPost;
}

const BlogPostContent = ({ blogPost }: Props): JSX.Element => {
  return (
    <article>
      {documentToReactComponents(blogPost.content.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children): React.ReactNode => {
            return children;
          },
          [BLOCKS.HEADING_1]: getRichTextElementRenderer(Heading1),
          [BLOCKS.HEADING_2]: getRichTextElementRenderer(Heading2),
          [BLOCKS.HEADING_3]: getRichTextElementRenderer(Heading3),
          [BLOCKS.HEADING_4]: getRichTextElementRenderer(Heading4),
          [BLOCKS.HEADING_5]: getRichTextElementRenderer(Heading5),
          [BLOCKS.HEADING_6]: getRichTextElementRenderer(Heading6),
          [INLINES.HYPERLINK]: getRichTextElementRenderer(HyperLink),
          [BLOCKS.LIST_ITEM]: getRichTextElementRenderer(ListItem),
          [BLOCKS.OL_LIST]: getRichTextElementRenderer(OlList),
          [BLOCKS.PARAGRAPH]: getRichTextElementRenderer(Paragraph),
          [BLOCKS.TABLE]: getRichTextElementRenderer(Table),
          [BLOCKS.TABLE_CELL]: getRichTextElementRenderer(TableCell),
          [BLOCKS.TABLE_HEADER_CELL]:
            getRichTextElementRenderer(TableHeaderCell),
          [BLOCKS.TABLE_ROW]: getRichTextElementRenderer(TableRow),
          [BLOCKS.UL_LIST]: getRichTextElementRenderer(UlList),
        },
        renderText: (text): React.ReactNode => {
          return <Text text={text} />;
        },
      })}
    </article>
  );
};

export default BlogPostContent;
