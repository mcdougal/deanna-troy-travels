import { spacing } from '@lib/mui';

export default {
  blogFeatureButtonBase: {
    backgroundColor: `common.white`,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    display: `block`,
    height: `100%`,
    padding: 2,
    paddingTop: 1,
    transition: `all 0.1s ease-in-out`,
    '&:hover': {
      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
    },
  },
  websiteLogoContainer: {
    alignItems: `center`,
    display: `flex`,
    height: spacing(4),
    marginBottom: 1,
  },
  thumbnailAndTitle: {
    display: `flex`,
  },
  thumbnailContainer: {
    borderRadius: 4,
    height: spacing(9),
    overflow: `hidden`,
    position: `relative`,
    width: spacing(9),
  },
  blogPostTitle: {
    flex: 1,
    lineHeight: 1.5,
    marginLeft: 2,
  },
};
