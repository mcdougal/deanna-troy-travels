import { Theme } from '@mui/material';

export default {
  toolbar: {
    justifyContent: `space-between`,
  },
  menu: {
    fontSize: (theme: Theme): string => {
      return theme.spacing(6);
    },
  },
  socialLogo: {
    color: `grey.400`,
  },
  youTube: {
    fontSize: 32,
  },
  instagram: {
    fontSize: 26,
  },
  facebook: {
    fontSize: 26,
  },
  poshmark: {
    fontSize: 26,
  },
  tikTok: {
    fontSize: 26,
  },
  amazon: {
    fontSize: 26,
  },
};
