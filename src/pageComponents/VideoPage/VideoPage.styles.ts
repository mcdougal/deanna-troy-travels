export default {
  pageContainer: {
    marginBottom: { xs: 12, sm: 20 },
  },
  videoContainer: {
    marginBottom: 3,
    marginTop: { xs: 1, sm: 4 },
  },
  videoTitle: {
    marginBottom: 2,
  },
  videoMetricsContainer: {
    alignItems: `center`,
    display: `flex`,
    marginBottom: 2,
    '& > * + *': {
      marginLeft: 3,
    },
  },
  viewsIcon: {
    fontSize: 20,
  },
  likesIcon: {
    fontSize: 18,
  },
  commentsIcon: {
    fontSize: 18,
    marginBottom: `-1px`,
  },
  videoDescription: {
    overflowWrap: `anywhere`,
    whiteSpace: `pre-wrap`,
    wordBreak: `break-word`,
  },
  relatedVideosContainer: {
    marginTop: { xs: 8, md: 10 },
  },
};
