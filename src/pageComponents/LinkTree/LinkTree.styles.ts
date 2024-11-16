import { spacing } from '@lib/mui';

export default {
  container: {
    paddingX: 2,
  },

  // Header Section
  headerSection: {
    marginTop: { xs: 1, sm: 3 },
  },

  // Socials Section
  socialsSection: {
    marginTop: { xs: 1, sm: 2 },
  },

  // Links Section
  linksSection: {
    marginTop: { xs: 2, sm: 3 },
  },
  link: {
    justifyContent: `flex-start`,
    paddingLeft: 2,
  },
  linkIconImageContainer: {
    borderRadius: 2,
    height: 32,
    letterSpacing: `0.8px`,
    marginRight: 1,
    overflow: `hidden`,
    position: `relative`,
    width: 32,
  },
  linkLabel: {
    letterSpacing: 0,
  },

  // Shops Section
  shopsSection: {
    marginTop: { xs: 5, sm: 6 },
  },
  shopsTitleContainer: {
    marginBottom: 4,
  },
  shopButton: {
    flex: `1 0 auto`,
  },
  shopButtonLabel: {
    minWidth: spacing(10),
  },

  // Videos Section
  videosSection: {
    marginBottom: 20,
    marginTop: { xs: 6, sm: 6 },
  },
  videosTitleContainer: {
    marginBottom: 4,
  },
  videosContent: {
    display: { xs: `block`, md: `flex` },
    alignItems: `start`,
  },
  viewsIcon: {
    fontSize: 15,
  },
  likesIcon: {
    fontSize: 15,
  },
  commentsIcon: {
    fontSize: 15,
    marginBottom: `-1px`,
  },
  globalAboutSectionContainer: {
    marginLeft: { xs: 0, md: 4 },
    marginTop: { xs: 8, md: 0 },
    position: `sticky`,
    top: 80,
    width: { xs: `auto`, md: `350px` },
  },
};
