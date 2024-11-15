import { spacing } from '@lib/mui';

export default {
  introSectionContainer: {
    display: { xs: `block`, sm: `flex` },
  },
  imageContainer: {
    borderRadius: 5,
    height: spacing({ xs: 35, sm: 60 }),
    marginBottom: { xs: 2, sm: 0 },
    marginRight: { xs: 0, sm: 4 },
    minWidth: spacing({ sm: 38, md: 45 }),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  letsChatParagraph: {
    lineHeight: 1.6,
  },
  ctaContainer: {
    display: `flex`,
    gap: 2,
    flexWrap: `wrap`,
    justifyContent: { xs: `center`, sm: `flex-start` },
    marginTop: 4,
  },
  ctaButton: {
    whiteSpace: `nowrap`,
    '& .MuiButton-endIcon > *:nth-of-type(1)': {
      fontSize: 18,
    },
  },
};
