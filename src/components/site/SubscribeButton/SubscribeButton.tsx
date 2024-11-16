import { Button } from '@mui/material';
import { forwardRef } from 'react';

type Ref = HTMLButtonElement;

type Props = {
  fullWidth?: boolean;
};

const SubscribeButton = forwardRef<Ref, Props>(
  ({ fullWidth = false }, ref): JSX.Element => {
    return (
      <Button
        ref={ref}
        color="inherit"
        size="small"
        sx={{ width: { xs: `100%`, sm: fullWidth ? `100%` : `auto` } }}
        variant="text">
        Subscribe
      </Button>
    );
  },
);

SubscribeButton.displayName = `SubscribeButton`;

export default SubscribeButton;
