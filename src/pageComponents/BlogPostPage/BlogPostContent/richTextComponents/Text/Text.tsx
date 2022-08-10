import React from 'react';

import { ANCHOR_ID_REGEX } from '../../Anchor';

import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';

// Replace YouTube embed URLs with an iframe
const YOUTUBE_EMBED_REGEX =
  /https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9-]+\/?/g;

interface Props {
  text: string;
}

const Text = ({ text }: Props): JSX.Element => {
  const textWithoutAnchorId = text.replace(ANCHOR_ID_REGEX, ``);
  const textParts = textWithoutAnchorId.split(YOUTUBE_EMBED_REGEX);
  const embedUrls = textWithoutAnchorId.match(YOUTUBE_EMBED_REGEX);

  return (
    <>
      {textParts.map((textPart, i) => {
        const embedUrl = embedUrls && embedUrls[i];

        return (
          <React.Fragment key={i}>
            {textPart.split(`\n`).map((t, j) => {
              return (
                <React.Fragment key={j}>
                  {j > 0 && <br />}
                  {t}
                </React.Fragment>
              );
            })}
            {embedUrl && <EmbeddedYouTubeVideo url={embedUrl} />}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Text;
