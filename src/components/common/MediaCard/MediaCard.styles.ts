import { Theme } from '@mui/material';

export default {
  mediaCardContainer: {
    marginBottom: 4,
    position: `relative`,
    width: `100%`,
  },
  thumbnail: {
    borderRadius: 6,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    filter: `brightness(95%)`,
    height: `180px`,
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  actions: {
    bottom: (theme: Theme): string => {
      return theme.spacing(-4);
    },
    display: `flex`,
    left: (theme: Theme): string => {
      return theme.spacing(3);
    },
    position: `absolute`,
    right: (theme: Theme): string => {
      return theme.spacing(3);
    },
  },
  actionsLeft: {
    display: `flex`,
    flex: 1,
    '& > * + *': {
      marginLeft: 1,
    },
  },
};
