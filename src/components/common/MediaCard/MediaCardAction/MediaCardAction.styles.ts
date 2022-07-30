import { Theme } from '@mui/material';

export default {
  mediaCardActionContainer: {
    alignItems: `center`,
    backgroundColor: `common.white`,
    borderRadius: 2,
    boxShadow: `0 2px 12px rgba(0, 0, 0, 0.1)`,
    color: `primary.main`,
    display: `flex`,
    paddingLeft: 1,
    paddingRight: 1,
    height: (theme: Theme): string => {
      return theme.spacing(5);
    },
  },
  hasValue: {
    paddingLeft: 2,
    paddingRight: 2,
  },
  iconContainer: {
    display: `flex`,
  },
  valueContainer: {
    marginLeft: 1,
  },
};
