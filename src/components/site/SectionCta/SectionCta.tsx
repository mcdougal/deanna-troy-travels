import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, ButtonProps } from '@mui/material';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Ref = any;

type Props = {
  children: React.ReactNode;
  color?: ButtonProps[`color`];
  href?: string;
  onClick?: () => void;
  target?: string;
  variant?: `contained` | `outlined`;
};

const SectionCta = forwardRef<Ref, Props>(
  (
    {
      children,
      color = `inherit`,
      href,
      target,
      variant = `outlined`,
      ...buttonProps
    },
    ref,
  ): JSX.Element => {
    if (href) {
      return (
        <Button
          ref={ref}
          color={color}
          component="a"
          endIcon={<ArrowForwardIcon fontSize="small" />}
          href={href}
          size="small"
          target={target}
          variant={variant}
          {...buttonProps}>
          {children}
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        color={color}
        endIcon={<ArrowForwardIcon fontSize="small" />}
        size="small"
        variant={variant}
        {...buttonProps}>
        {children}
      </Button>
    );
  },
);

SectionCta.displayName = `SectionCta`;

export default SectionCta;
