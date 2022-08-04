import { Box } from '@mui/material';

import sx from './EmbeddedYouTubeVideo.styles';

interface Props {
  url: string;
}

const EmbeddedYouTubeVideo = ({ url }: Props): JSX.Element => {
  return (
    <Box sx={sx.container}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="100%"
        src={url}
        title="YouTube video player"
        width="100%"
      />
    </Box>
  );
};

export default EmbeddedYouTubeVideo;
