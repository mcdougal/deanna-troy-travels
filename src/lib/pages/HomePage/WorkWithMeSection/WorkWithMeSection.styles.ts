import { Theme } from '@mui/material';

export default {
  sectionTitleContainer: {
    marginBottom: 4,
  },
  imageContainer: {
    borderRadius: 5,
    height: (theme: Theme): string => {
      return theme.spacing(45);
    },
    marginBottom: 3,
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  ctaContainer: {
    display: `flex`,
    justifyContent: `center`,
    marginTop: 6,
  },
};
