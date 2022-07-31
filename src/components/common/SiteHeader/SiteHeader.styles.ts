import { Theme } from '@mui/material';

export default {
  toolbar: {
    justifyContent: `space-between`,
    paddingBottom: 1,
    paddingTop: 1,
  },
  logoContainer: {
    alignItems: `center`,
    display: `flex`,
    marginLeft: `-4px`,
    marginTop: `-2px`,
  },
  logoText: {
    lineHeight: 1,
    marginLeft: 1,
    marginTop: `-2px`,
  },
  deannaTroy: {
    color: `primary.main`,
  },
  menu: {
    fontSize: (theme: Theme): string => {
      return theme.spacing(5);
    },
  },
};
