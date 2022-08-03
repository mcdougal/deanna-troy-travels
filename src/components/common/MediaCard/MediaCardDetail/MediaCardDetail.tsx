import { Box, Typography } from '@mui/material';

import sx from './MediaCardDetail.styles';

interface Props {
  icon: React.ReactElement;
  label: string;
}

const MediaCardDetail = ({ icon, label }: Props): JSX.Element => {
  return (
    <Box sx={sx.mediaCardDetailContainer}>
      <Box sx={sx.iconContainer}>{icon}</Box>
      <Typography sx={sx.label} variant="caption">
        <b>{label}</b>
      </Typography>
    </Box>
  );
};

export default MediaCardDetail;
