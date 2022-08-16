import { Block, Inline } from '@contentful/rich-text-types';
import { Box, Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import EmbeddedInstagramPost from './EmbeddedInstagramPost';
import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';
import getInstagramEmbedPostId from './getInstagramEmbedPostId';
import getYouTubeEmbedPostId from './getYouTubeEmbedPostId';
import sx from './Paragraph.styles';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const Paragraph = ({ children, node }: Props): JSX.Element => {
  const instagramEmbedPostId = getInstagramEmbedPostId(node);

  if (instagramEmbedPostId) {
    return (
      <Box sx={sx.embedContainer}>
        <EmbeddedInstagramPost postId={instagramEmbedPostId} />
      </Box>
    );
  }

  const youTubeEmbedPostId = getYouTubeEmbedPostId(node);

  if (youTubeEmbedPostId) {
    return (
      <Box sx={sx.embedContainer}>
        <EmbeddedYouTubeVideo videoId={youTubeEmbedPostId} />
      </Box>
    );
  }

  return (
    <Typography component="p" sx={sx.paragraph} variant="h6">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Paragraph;
