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

type Props = {
  children: React.ReactNode;
  node: Block | Inline;
};

const Paragraph = ({ children, node }: Props): JSX.Element => {
  const instagramEmbed = getInstagramEmbed(node);

  if (instagramEmbed) {
    return (
      <Box sx={sx.instagramEmbedContainer}>
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
      <Box sx={sx.tikTokEmbedContainer}>
        <EmbeddedTikTokPost videoId={tikTokEmbed.videoId} />
      </Box>
    );
  }

  const youTubeEmbed = getYouTubeEmbed(node);

  if (youTubeEmbed) {
    return (
      <Box sx={sx.youTubeEmbedContainer}>
        <EmbeddedYouTubeVideo videoId={youTubeEmbed.videoId} />
      </Box>
    );
  }

  const isLabel =
    node.content.length === 1 &&
    node.content[0].nodeType === `text` &&
    node.content[0].value.endsWith(`:`);

  return (
    <Typography
      component="p"
      sx={{ ...sx.paragraph, ...(isLabel ? sx.paragraphLabel : {}) }}
      variant="body1">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Paragraph;
