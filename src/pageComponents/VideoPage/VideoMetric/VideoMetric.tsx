import { Box, Typography } from '@mui/material';

import sx from './VideoMetric.styles';

interface Props {
  icon: React.ReactElement;
  value: string;
}

const VideoMetric = ({ icon, value }: Props): JSX.Element => {
  return (
    <Box sx={sx.videoMetricContainer}>
      <Box sx={sx.iconContainer}>{icon}</Box>
      <Typography sx={sx.value} variant="body2">
        {value}
      </Typography>
    </Box>
  );
};

export default VideoMetric;
