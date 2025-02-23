import { spacing } from '@lib/mui';

export default {
  title: {
    color: `primary.main`,
    marginBottom: 2,
    marginTop: 4,
  },
  heroImageContainer: {
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
    height: spacing({ xs: 40, md: 60 }),
    overflow: `hidden`,
    position: `relative`,
  },
  firstParagraph: {
    fontWeight: `fontWeightRegular`,
    lineHeight: 1.7,
  },
};
