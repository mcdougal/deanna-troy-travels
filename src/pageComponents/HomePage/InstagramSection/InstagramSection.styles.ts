import { spacing } from '@lib/mui';

export default {
  sectionTitleContainer: {
    marginBottom: 3,
  },
  thumbnailContainer: {
    borderRadius: 4,
    filter: `brightness(95%)`,
    height: spacing({ xs: 15, md: 23 }),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
    '&:hover': {
      opacity: 0.8,
    },
  },
  ctaContainer: {
    display: `flex`,
    justifyContent: `center`,
    marginTop: 4,
  },
};
