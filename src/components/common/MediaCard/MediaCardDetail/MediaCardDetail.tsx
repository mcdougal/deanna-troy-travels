import { Box, Typography } from '@mui/material';

import sx from './MediaCardDetail.styles';

interface Props {
  icon: React.ReactElement;
  value: string;
}

const MediaCardDetail = ({ icon, value }: Props): JSX.Element => {
  return (
    <Box sx={sx.mediaCardDetailContainer}>
      <Box sx={sx.iconContainer}>{icon}</Box>
      <Typography sx={sx.value} variant="caption">
        <b>{value}</b>
      </Typography>
    </Box>
  );
};

export default MediaCardDetail;
