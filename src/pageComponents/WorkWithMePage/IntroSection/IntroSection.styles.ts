import { spacing } from '@lib/mui';

export default {
  introSectionContainer: {
    display: { xs: `block`, sm: `flex` },
  },
  imageContainer: {
    borderRadius: 5,
    height: spacing({ xs: 35, sm: 60 }),
    marginBottom: 2,
    marginRight: { xs: 0, sm: 4 },
    minWidth: spacing({ sm: 38, md: 45 }),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  sectionTitleContainer: {
    marginBottom: 2,
  },
  sectionTitleContainerDesktop: {
    display: { xs: `none`, sm: `block` },
    marginTop: 1,
  },
  sectionTitleContainerMobile: {
    display: { xs: `block`, sm: `none` },
    marginBottom: 3,
  },
  firstParagraph: {
    fontWeight: `fontWeightRegular`,
    lineHeight: 1.5,
  },
  secondParagraph: {
    lineHeight: 1.6,
  },
  ctaContainer: {
    display: `flex`,
    gap: 2,
    justifyContent: { xs: `center`, sm: `flex-start` },
    marginTop: 4,
  },
  ctaButton: {
    '& .MuiButton-endIcon > *:nth-of-type(1)': {
      fontSize: 18,
    },
  },
};
