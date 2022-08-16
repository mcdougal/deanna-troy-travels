import React from 'react';

import { ANCHOR_ID_REGEX } from '../../Anchor';

import EmbeddedInstagramPost from './EmbeddedInstagramPost';
import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';

// Replace YouTube embed URLs with an iframe
export const YOUTUBE_EMBED_REGEX =
  /^\s*https:\/\/www\.youtube\.com\/watch\?v=(?<videoId>[A-Za-z0-9_-]+)\/?\s*$/;

// Replace Instagram URLs with embedded Instagram HTML
export const INSTAGRAM_EMBED_REGEX =
  /^\s*https:\/\/www\.instagram\.com\/p\/(?<postId>[A-Za-z0-9_-]+)\/?\s*$/;

interface Props {
  text: string;
}

const Text = ({ text }: Props): JSX.Element => {
  const youTubeEmbedMatch = text.match(YOUTUBE_EMBED_REGEX);

  if (youTubeEmbedMatch?.groups?.videoId) {
    return <EmbeddedYouTubeVideo videoId={youTubeEmbedMatch.groups.videoId} />;
  }

  const instagramEmbedMatch = text.match(INSTAGRAM_EMBED_REGEX);

  if (instagramEmbedMatch?.groups?.postId) {
    return <EmbeddedInstagramPost postId={instagramEmbedMatch.groups.postId} />;
  }

  const textWithoutAnchorId = text.replace(ANCHOR_ID_REGEX, ``);

  return (
    <>
      {textWithoutAnchorId.split(`\n`).map((t, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {t}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Text;
