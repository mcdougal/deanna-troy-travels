import { Theme } from '@mui/material';

export default {
  blogFeatureButtonBase: {
    backgroundColor: `common.white`,
    borderRadius: 5,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    display: `block`,
    height: `100%`,
    padding: 2,
    paddingTop: 1,
    transition: `all 0.1s ease-in-out`,
    '&:hover': {
      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
    },
  },
  thumbnailAndTitle: {
    display: `flex`,
  },
  thumbnailContainer: {
    borderRadius: 4,
    height: (theme: Theme): string => {
      return theme.spacing(9);
    },
    overflow: `hidden`,
    position: `relative`,
    width: (theme: Theme): string => {
      return theme.spacing(9);
    },
  },
  blogPostTitle: {
    flex: 1,
    lineHeight: 1.5,
    marginLeft: 2,
  },
};
