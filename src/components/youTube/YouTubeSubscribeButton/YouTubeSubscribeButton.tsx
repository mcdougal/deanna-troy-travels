import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

const SUBSCRIBE_EMBED_SCRIPT_URL = `https://apis.google.com/js/platform.js`;
const DEANNA_TROY_TRAVELS_CHANNEL_ID = `UCJeRZkaH3ORHkNWUNqfXJEg`;

const YouTubeSubscribeButton = (): JSX.Element => {
  const isInitializedRef = useRef(false);
  const subscribeElemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }

    isInitializedRef.current = true;
    const script = document.createElement(`script`);
    script.src = SUBSCRIBE_EMBED_SCRIPT_URL;
    subscribeElemRef.current?.parentNode?.appendChild(script);
  }, []);

  return (
    <Box>
      <div
        ref={subscribeElemRef}
        className="g-ytsubscribe"
        data-channelid={DEANNA_TROY_TRAVELS_CHANNEL_ID}
        data-count="default"
        data-layout="default"
      />
    </Box>
  );
};

export default YouTubeSubscribeButton;
