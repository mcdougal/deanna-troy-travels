import { Theme } from '@mui/material';

export default {
  sectionTitleContainer: {
    marginBottom: 2,
  },
  imageContainer: {
    borderRadius: 5,
    height: (theme: Theme): string => {
      return theme.spacing(35);
    },
    marginBottom: 2,
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  ctaContainer: {
    display: `flex`,
    justifyContent: `center`,
    marginTop: 4,
  },
};
