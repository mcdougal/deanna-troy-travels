import { Stack, Typography } from '@mui/material';

type Props = {
  label: string;
  value: string;
};

const TravelStat = ({ label, value }: Props): JSX.Element => {
  return (
    <Stack alignItems="center" spacing={1}>
      <Typography align="center" component="p" variant="h2">
        {value}
      </Typography>
      <Typography align="center" component="p" variant="body1">
        {label}
      </Typography>
    </Stack>
  );
};

export default TravelStat;
