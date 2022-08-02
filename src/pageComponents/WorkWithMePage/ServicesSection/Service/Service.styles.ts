import { Theme } from '@mui/material';

export default {
  thumbnailContainer: {
    borderRadius: 5,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    height: (theme: Theme): string => {
      return theme.spacing(22);
    },
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  actionContainer: {
    paddingLeft: 3,
    paddingRight: 3,
    marginTop: -2,
    position: `relative`,
  },
  actionButton: {
    alignItems: `center`,
    backgroundColor: `common.white`,
    borderRadius: 2,
    boxShadow: `0 2px 12px rgba(0, 0, 0, 0.1)`,
    color: `primary.main`,
    display: `flex`,
    justifyContent: `center`,
    paddingLeft: 1,
    paddingRight: 1,
    height: (theme: Theme): string => {
      return theme.spacing(5);
    },
  },
  iconContainer: {
    display: `flex`,
  },
  labelContainer: {
    marginLeft: 1,
  },
  description: {
    marginTop: 2,
    paddingLeft: 3,
    paddingRight: 3,
    textAlign: `center`,
  },
};
