import { Stack, Typography, TypographyProps } from '@mui/material';

import { SquigglyDividerSvg } from '@components/generic';

interface Props extends TypographyProps {
  children: React.ReactNode;
  color?: TypographyProps[`color`];
  variant?: TypographyProps[`variant`];
}

const SectionTitle = ({
  children,
  color,
  variant = `h3`,
}: Props): JSX.Element => {
  return (
    <Stack alignItems="center" spacing={3}>
      <Typography align="center" color={color} component="h2" variant={variant}>
        {children}
      </Typography>
      <SquigglyDividerSvg sx={{ height: { xs: 10, md: 16 } }} />
    </Stack>
  );
};

export default SectionTitle;
