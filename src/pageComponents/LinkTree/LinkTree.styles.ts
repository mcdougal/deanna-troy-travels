export default {
  logoAndTitleContainer: {
    marginTop: {
      xs: 1,
      sm: 2,
    },
  },
  links: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `column`,
    marginTop: {
      xs: 2,
      sm: 6,
    },
    paddingBottom: {
      xs: 0,
      sm: 10,
    },
  },
  link: {
    borderTop: `1px solid #f4f4f4`,
    borderLeft: {
      xs: `none`,
      sm: `1px solid #f4f4f4`,
    },
    borderRight: {
      xs: `none`,
      sm: `1px solid #f4f4f4`,
    },
    maxWidth: `600px`,
    padding: `16px 0`,
    width: `100%`,
    '&:last-child': {
      borderBottom: `1px solid #f4f4f4`,
    },
  },
  linkInner: {
    alignItems: `center`,
    display: `flex`,
    textAlign: `left`,
    width: `14.5rem`,
  },
  linkLabel: {
    fontWeight: `normal`,
    marginLeft: 2,
    fontSize: {
      xs: `1.2rem`,
      sm: `1.2rem`,
      md: `1.2rem`,
      lg: `1.2rem`,
      xl: `1.2rem`,
    },
  },
  mostRecentVideoSection: {
    backgroundColor: `#fafafa`,
  },
  mostRecentVideoContainer: {
    maxWidth: `400px`,
    margin: `0 auto`,
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
};
