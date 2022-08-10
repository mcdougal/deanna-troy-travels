import { Box } from '@mui/material';

import sx from './EmbeddedYouTubeVideo.styles';

interface Props {
  url: string;
}

const EmbeddedYouTubeVideo = ({ url }: Props): JSX.Element => {
  return (
    <Box component="span" sx={sx.container}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src={url}
        style={{
          height: `100%`,
          left: 0,
          position: `absolute` as const,
          top: 0,
          width: `100%`,
        }}
        title="YouTube video player"
      />
    </Box>
  );
};

export default EmbeddedYouTubeVideo;
