import { spacing } from '@lib/mui';

export default {
  blogFeatureButtonBase: {
    backgroundColor: `common.white`,
    display: `block`,
    height: `100%`,
    paddingTop: 1,
    transition: `all 0.1s ease-in-out`,
  },
  websiteLogoContainer: {
    alignItems: `center`,
    display: `flex`,
    height: spacing(4),
    marginBottom: 1,
  },
  thumbnailAndTitle: {
    alignItems: `center`,
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
