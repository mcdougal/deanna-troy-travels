import { Block, Inline } from '@contentful/rich-text-types';
import { Box, Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import EmbeddedInstagramPost from './EmbeddedInstagramPost';
import EmbeddedTikTokPost from './EmbeddedTikTokPost';
import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';
import getInstagramEmbed from './getInstagramEmbed';
import getTikTokEmbed from './getTikTokEmbed';
import getYouTubeEmbed from './getYouTubeEmbed';
import sx from './Paragraph.styles';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const Paragraph = ({ children, node }: Props): JSX.Element => {
  const instagramEmbed = getInstagramEmbed(node);

  if (instagramEmbed) {
    return (
      <Box sx={sx.embedContainer}>
        <EmbeddedInstagramPost
          includeCaption={instagramEmbed.includeCaption}
          postId={instagramEmbed.postId}
        />
      </Box>
    );
  }

  const tikTokEmbed = getTikTokEmbed(node);

  if (tikTokEmbed) {
    return (
      <Box sx={sx.embedContainer}>
        <EmbeddedTikTokPost videoId={tikTokEmbed.videoId} />
      </Box>
    );
  }

  const youTubeEmbed = getYouTubeEmbed(node);

  if (youTubeEmbed) {
    return (
      <Box sx={sx.embedContainer}>
        <EmbeddedYouTubeVideo videoId={youTubeEmbed.videoId} />
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
