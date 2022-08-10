import { spacing } from '@lib/mui';

export default {
  title: {
    color: `primary.main`,
    marginBottom: { xs: 4, sm: 6 },
    marginTop: 5,
    textAlign: `center`,
  },
  heroImageContainer: {
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
    borderRadius: 4,
    height: spacing({ xs: 40, md: 60 }),
    overflow: `hidden`,
    position: `relative`,
  },
};
