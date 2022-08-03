import { Theme } from '@mui/material';

export default {
  blogFeatureButtonBase: {
    display: `block`,
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
