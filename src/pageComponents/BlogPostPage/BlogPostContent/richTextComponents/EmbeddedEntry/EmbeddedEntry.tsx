import { Block, Inline } from '@contentful/rich-text-types';

import { BlogPost } from '../../../getStaticProps';

import BlogPostImageGallery from './BlogPostImageGallery';

interface Props {
  links?: BlogPost[`content`][`links`];
  node: Block | Inline;
}

const EmbeddedEntry = ({ links, node }: Props): JSX.Element | null => {
  const entry = links?.entries.block.find((contentEntry) => {
    return contentEntry.sys.id === node.data.target.sys.id;
  });

  if (!entry) {
    return null;
  }

  if (entry.__typename === `BlogPostImageGallery`) {
    return <BlogPostImageGallery blogPostImageGallery={entry} />;
  }

  const exhaustiveCheck: never = entry.__typename;
  return exhaustiveCheck;
};

export default EmbeddedEntry;
