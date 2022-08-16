import { Box } from '@mui/material';

import sx from './EmbeddedYouTubeVideo.styles';

interface Props {
  videoId: string;
}

const EmbeddedYouTubeVideo = ({ videoId }: Props): JSX.Element => {
  return (
    <Box sx={sx.container}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src={`https://www.youtube.com/embed/${videoId}`}
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
