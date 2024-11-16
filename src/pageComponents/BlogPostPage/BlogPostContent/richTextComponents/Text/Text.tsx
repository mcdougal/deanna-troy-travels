import React from 'react';

import { ANCHOR_ID_REGEX } from '../../Anchor';

type Props = {
  text: string;
};

const Text = ({ text }: Props): JSX.Element => {
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
