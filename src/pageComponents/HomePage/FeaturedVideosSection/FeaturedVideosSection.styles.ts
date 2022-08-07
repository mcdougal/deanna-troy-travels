export default {
  sectionTitleContainer: {
    marginBottom: 3,
  },
  featuredVideosContainer: {
    display: { xs: `block`, md: `flex` },
  },
  featuredVideoContainer: {
    '& + &': {
      marginTop: { xs: 3, md: 0 },
    },
  },
  viewsIcon: {
    fontSize: 14,
  },
  likesIcon: {
    fontSize: 14,
  },
  commentsIcon: {
    fontSize: 14,
    marginBottom: `-1px`,
  },
  ctaContainer: {
    display: `flex`,
    justifyContent: `center`,
    marginTop: 4,
  },
};
