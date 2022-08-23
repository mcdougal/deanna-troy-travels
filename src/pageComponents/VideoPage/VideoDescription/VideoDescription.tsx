import { Link as MuiLink } from '@mui/material';
import React from 'react';

import extractUrls, { Token } from './extractUrls';

interface Props {
  description: string;
}

const VideoDescription = ({ description }: Props): JSX.Element => {
  const tokens = extractUrls(description);

  const renderToken = (token: Token): React.ReactNode => {
    if (token.type === `url`) {
      return <MuiLink href={token.value}>{token.value}</MuiLink>;
    }

    if (token.type === `string`) {
      return token.value;
    }

    const exhaustiveCheck: never = token.type;
    return exhaustiveCheck;
  };

  return (
    <>
      {tokens.map((token, i) => {
        return (
          <React.Fragment
            key={
              // The tokens don't have a unique key, so we must use the index
              // eslint-disable-next-line react/no-array-index-key
              i
            }>
            {renderToken(token)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default VideoDescription;
