import { Block, Inline } from '@contentful/rich-text-types';

import { BlogPost } from '../getStaticProps';

type RichTextRenderFunction = (
  node: Block | Inline,
  children: React.ReactNode,
) => React.ReactNode;

type RichTextElementComponent = (props: {
  children: React.ReactNode;
  links?: BlogPost[`content`][`links`];
  node: Block | Inline;
}) => JSX.Element | null;

export default (
  Component: RichTextElementComponent,
  links?: BlogPost[`content`][`links`],
): RichTextRenderFunction => {
  // eslint-disable-next-line react/display-name
  return (node, children) => {
    return (
      <Component links={links} node={node}>
        {children}
      </Component>
    );
  };
};
