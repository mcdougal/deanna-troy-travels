import { Typography, TypographyProps } from '@mui/material';

interface Props extends TypographyProps {
  children: React.ReactNode;
  color?: TypographyProps[`color`];
  variant?: TypographyProps[`variant`];
}

const SectionTitle = ({
  children,
  color,
  variant = `h4`,
}: Props): JSX.Element => {
  return (
    <Typography color={color} component="h2" variant={variant}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
