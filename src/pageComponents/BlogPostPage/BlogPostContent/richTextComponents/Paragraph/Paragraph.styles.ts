export default {
  instagramEmbedContainer: {
    marginBottom: { xs: 3, sm: 4 },
    marginX: `auto`,
    maxWidth: `540px`,
  },
  tikTokEmbedContainer: {
    marginBottom: { xs: 3, sm: 4 },
    marginX: `auto`,
    maxWidth: `540px`,
  },
  youTubeEmbedContainer: {
    marginBottom: { xs: 3, sm: 4 },
  },
  paragraph: {
    // Keep these styles in sync with ULList and OLList component styles
    color: `#212529`,
    fontFamily: `Inter, Roboto, Arial`,
    fontSize: { xs: `1.125rem`, sm: `1.125rem` },
    fontWeight: `fontWeightRegular`,
    letterSpacing: 0,
    lineHeight: { xs: 1.625, sm: 1.7 },
    marginBottom: { xs: 3, sm: 4 },
    overflowWrap: `anywhere`,
    wordBreak: `break-word`,
  },
  paragraphLabel: {
    marginBottom: 0,
    '& + ul': {
      marginTop: 0.5,
    },
    '& + ol': {
      marginTop: 0.5,
    },
  },
};
