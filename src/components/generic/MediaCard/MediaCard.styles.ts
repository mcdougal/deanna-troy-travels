export default {
  mediaCardButtonBase: {
    alignItems: `flex-start`,
    display: `flex`,
    flexDirection: `column`,
    height: `100%`,
    position: `relative`,
    transition: `all 0.1s ease-in-out`,
    width: `100%`,
  },
  thumbnailContainer: {
    filter: `brightness(95%)`,
    height: 0,
    overflow: `hidden`,
    paddingTop: `56.25%`,
    position: `relative`,
    width: `100%`,
  },
  title: {
    fontWeight: `fontWeightLight`,
    marginBottom: 1,
    marginTop: `12px`,
  },
  titleSm: {
    fontSize: `h6.fontSize`,
  },
  titleMd: {
    fontSize: { xs: `h6.fontSize`, md: `h5.fontSize` },
  },
  titleLg: {
    fontSize: { xs: `h6.fontSize`, md: `h4.fontSize` },
  },
  details: {
    display: `flex`,
    flexWrap: `wrap`,
    marginTop: `4px`,
    '& > *': {
      marginRight: 2,
    },
  },
  alignRight: {
    justifyContent: `flex-end`,
  },
  description: {
    marginTop: 1.5,
    wordBreak: `break-word`,
  },
};
