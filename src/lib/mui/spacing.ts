import { Theme } from '@mui/material';

type Args =
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]
  | [{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number }];

type ReturnValue =
  | string
  | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };

export default (...args: Args): ((theme: Theme) => ReturnValue) => {
  return (theme) => {
    if (typeof args[0] === `object`) {
      return {
        xs: args[0].xs !== undefined ? theme.spacing(args[0].xs) : undefined,
        sm: args[0].sm !== undefined ? theme.spacing(args[0].sm) : undefined,
        md: args[0].md !== undefined ? theme.spacing(args[0].md) : undefined,
        lg: args[0].lg !== undefined ? theme.spacing(args[0].lg) : undefined,
        xl: args[0].xl !== undefined ? theme.spacing(args[0].xl) : undefined,
      };
    }

    if (args.length === 4) {
      return theme.spacing(args[0], args[1], args[2], args[3]);
    }

    if (args.length === 3) {
      return theme.spacing(args[0], args[1], args[2]);
    }

    if (args.length === 2) {
      return theme.spacing(args[0], args[1]);
    }

    return theme.spacing(args[0]);
  };
};
