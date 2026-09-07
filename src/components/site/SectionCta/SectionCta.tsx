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
  showArrow?: boolean;
  target?: string;
  variant?: `contained` | `outlined`;
};

const SectionCta = forwardRef<Ref, Props>(
  (
    {
      children,
      color = `inherit`,
      href,
      showArrow = true,
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
          endIcon={showArrow ? <ArrowForwardIcon fontSize="small" /> : undefined}
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
        endIcon={showArrow ? <ArrowForwardIcon fontSize="small" /> : undefined}
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
