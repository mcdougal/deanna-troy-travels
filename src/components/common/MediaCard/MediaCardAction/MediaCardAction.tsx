import { Box, Typography } from '@mui/material';

import sx from './MediaCardAction.styles';

interface Props {
  icon: React.ReactElement;
  value?: string;
}

const MediaCardAction = ({ icon, value }: Props): JSX.Element => {
  return (
    <Box sx={[sx.mediaCardActionContainer, value ? sx.hasValue : null]}>
      <Box sx={sx.iconContainer}>{icon}</Box>
      {value && (
        <Typography sx={sx.valueContainer} variant="caption">
          <b>{value}</b>
        </Typography>
      )}
    </Box>
  );
};

export default MediaCardAction;
