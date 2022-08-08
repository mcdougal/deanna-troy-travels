import { spacing } from '@lib/mui';

export default {
  introSectionContainer: {
    display: { xs: `block`, sm: `flex` },
  },
  imageContainer: {
    borderRadius: 5,
    height: spacing({ xs: 35, sm: 50 }),
    marginBottom: 2,
    marginRight: { xs: 0, sm: 4 },
    minWidth: spacing(35),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  sectionTitleContainer: {
    marginBottom: 2,
  },
  sectionTitleContainerDesktop: {
    display: { xs: `none`, sm: `block` },
    marginTop: 2,
  },
  sectionTitleContainerMobile: {
    display: { xs: `block`, sm: `none` },
  },
  ctaContainer: {
    display: `flex`,
    justifyContent: { xs: `center`, sm: `flex-start` },
    marginTop: 4,
  },
  ctaButton: {
    '& .MuiButton-endIcon > *:nth-of-type(1)': {
      fontSize: 18,
    },
  },
};
