import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Ref = any;

interface Props {
  children: React.ReactNode;
  href?: string;
  target?: string;
}

const SectionCta = forwardRef<Ref, Props>(
  ({ children, href, target, ...buttonProps }, ref): JSX.Element => {
    if (href) {
      return (
        <Button
          ref={ref}
          color="inherit"
          component="a"
          endIcon={<ArrowForwardIcon fontSize="small" />}
          href={href}
          size="small"
          target={target}
          variant="outlined"
          {...buttonProps}>
          {children}
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        color="inherit"
        endIcon={<ArrowForwardIcon fontSize="small" />}
        size="small"
        variant="outlined"
        {...buttonProps}>
        {children}
      </Button>
    );
  },
);

SectionCta.displayName = `SectionCta`;

export default SectionCta;
