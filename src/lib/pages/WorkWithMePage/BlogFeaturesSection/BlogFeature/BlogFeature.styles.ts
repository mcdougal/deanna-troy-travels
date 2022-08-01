import { Theme } from '@mui/material';

export default {
  thumbnailAndTitle: {
    display: `flex`,
  },
  thumbnailContainer: {
    borderRadius: 4,
    height: (theme: Theme): string => {
      return theme.spacing(10);
    },
    overflow: `hidden`,
    position: `relative`,
    width: (theme: Theme): string => {
      return theme.spacing(10);
    },
  },
  blogPostTitle: {
    flex: 1,
  },
};
