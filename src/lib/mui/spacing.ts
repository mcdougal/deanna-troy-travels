import { Theme } from '@mui/material';

export default (value: number): ((theme: Theme) => string) => {
  return (theme) => {
    return theme.spacing(value);
  };
};
