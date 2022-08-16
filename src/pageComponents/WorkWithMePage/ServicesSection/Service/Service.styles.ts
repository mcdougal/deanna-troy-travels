import { spacing } from '@lib/mui';

export default {
  serviceContainer: {
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    borderRadius: 5,
    display: `block`,
    padding: 2,
    transition: `all 0.1s ease-in-out`,
    width: `100%`,
    '&:hover': {
      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
    },
  },
  titleContainer: {
    alignItems: `center`,
    color: `primary.main`,
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
    borderRadius: 5,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
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
