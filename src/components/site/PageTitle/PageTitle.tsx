import { Stack, Typography, TypographyProps } from '@mui/material';

import { SquigglyDividerSvg } from '@components/generic';

interface Props extends TypographyProps {
  children: React.ReactNode;
  color?: TypographyProps[`color`];
  variant?: TypographyProps[`variant`];
}

const PageTitle = ({ children, color, variant = `h2` }: Props): JSX.Element => {
  return (
    <Stack
      alignItems="center"
      spacing={3}
      sx={{ marginBottom: { xs: 3, sm: 4 }, marginTop: 5 }}>
      <Typography align="center" color={color} component="h1" variant={variant}>
        {children}
      </Typography>
      <SquigglyDividerSvg sx={{ height: { xs: 10, md: 16 } }} />
    </Stack>
  );
};

export default PageTitle;
