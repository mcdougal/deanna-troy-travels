import { Theme } from '@mui/material';

import { spacing } from '@lib/mui';

export default {
  serviceContainer: {
    display: `block`,
    padding: 2,
    transition: `all 0.1s ease-in-out`,
    width: `100%`,
  },
  titleContainer: {
    alignItems: `center`,
    display: `flex`,
    justifyContent: `center`,
    marginBottom: 2,
  },
  iconContainer: {
    display: `flex`,
  },
  title: {
    marginLeft: 1,
  },
  thumbnailContainer: {
    boxShadow: (theme: Theme): string => {
      const shadowColor = theme.palette.grey[200];
      return `12px 12px 0px ${shadowColor}`;
    },
    height: spacing({ xs: 22, sm: 30 }),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  description: {
    lineHeight: 1.5,
    marginTop: 2,
    paddingLeft: 3,
    paddingRight: 3,
    textAlign: `center`,
  },
};
