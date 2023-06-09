export default {
  logoAndTitleContainer: {
    marginTop: 2,
  },
  links: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `column`,
    marginBottom: 8,
    marginTop: 4,
  },
  link: {
    borderTop: `1px solid #ccc`,
    borderLeft: {
      xs: `none`,
      sm: `1px solid #ccc`,
    },
    borderRight: {
      xs: `none`,
      sm: `1px solid #ccc`,
    },
    maxWidth: `600px`,
    padding: `16px 0`,
    width: `100%`,
    '&:last-child': {
      borderBottom: `1px solid #ccc`,
    },
  },
  linkInner: {
    alignItems: `center`,
    display: `flex`,
    textAlign: `left`,
    width: `17rem`,
  },
  linkLabel: {
    fontWeight: `normal`,
    marginLeft: 2,
    fontSize: {
      xs: `1.4rem`,
      sm: `1.4rem`,
      md: `1.4rem`,
      lg: `1.4rem`,
      xl: `1.4rem`,
    },
  },
};
