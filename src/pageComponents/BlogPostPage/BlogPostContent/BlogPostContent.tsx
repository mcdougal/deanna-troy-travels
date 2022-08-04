import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import React from 'react';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostContent.styles';
import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';

// Replace YouTube embed URLs with an iframe
const YOUTUBE_EMBED_REGEX =
  /https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9]+\/?/g;

const contentfulRichTextOptions = (): Options => {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children): React.ReactNode => {
        return <Typography variant="body1">{children}</Typography>;
      },
    },
    renderText: (text): React.ReactNode => {
      const textParts = text.split(YOUTUBE_EMBED_REGEX);
      const embedUrls = text.match(YOUTUBE_EMBED_REGEX);

      return textParts.map((textPart, i) => {
        const embedUrl = embedUrls && embedUrls[i];

        return (
          <React.Fragment key={embedUrl || textPart}>
            {textPart}
            {embedUrl && <EmbeddedYouTubeVideo url={embedUrl} />}
          </React.Fragment>
        );
      });
    },
  };
};

interface Props {
  blogPost: BlogPost;
}

const BlogPostContent = ({ blogPost }: Props): JSX.Element => {
  return (
    <article>
      {documentToReactComponents(
        blogPost.content.json,
        contentfulRichTextOptions(),
      )}
    </article>
  );
};

export default BlogPostContent;
