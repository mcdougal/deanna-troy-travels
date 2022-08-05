import { spacing } from '@lib/mui';

export default {
  featuredPostContainer: {
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    borderRadius: 5,
    paddingBottom: 3,
    paddingTop: 2,
    paddingX: 1,
  },
  featuredPostLabel: {
    display: `block`,
    marginBottom: 2,
    textAlign: `center`,
  },
  coverImageContainer: {
    borderRadius: 4,
    height: spacing(25),
    overflow: `hidden`,
    position: `relative`,
  },
  featuredPostContent: {
    paddingX: 2,
  },
  title: {
    fontWeight: `fontWeightRegular`,
    marginTop: 2,
  },
  excerpt: {
    lineHeight: 1.7,
    marginBottom: 3,
    marginTop: 2,
  },
};
