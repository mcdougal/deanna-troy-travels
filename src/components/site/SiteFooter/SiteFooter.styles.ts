export default {
  siteFooter: {
    backgroundColor: `grey.50`,
    paddingBottom: { xs: 10, md: 15 },
    paddingTop: { xs: 8, md: 13 },
  },
  logoContainer: {
    display: `flex`,
    justifyContent: `center`,
    marginBottom: 4,
  },
  navItemContainer: {
    '&:nth-child(odd)': {
      textAlign: { xs: `right`, sm: `left` },
    },
  },
};
