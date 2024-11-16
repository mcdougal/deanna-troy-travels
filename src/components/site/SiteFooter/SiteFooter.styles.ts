import { spacing } from '@lib/mui';

export default {
  siteFooter: {
    backgroundColor: `grey.50`,
    paddingBottom: { xs: 10, md: 18 },
    paddingTop: { xs: 8, md: 12 },
  },
  siteFooterContent: {
    display: `flex`,
    flexDirection: `column`,
  },
  logoContainer: {
    display: `flex`,
    justifyContent: `center`,
    marginBottom: 3,
    minWidth: spacing(36),
  },
  travelWithMe: {
    marginBottom: 4,
  },
  navItems: {
    display: `flex`,
    flexDirection: { xs: `column`, sm: `row` },
    flexWrap: `wrap`,
    justifyContent: `center`,
  },
  socialsContainer: {
    marginTop: { xs: 4, sm: 2 },
  },
  navItemContainer: {
    marginBottom: 2,
    textAlign: `center`,
  },
};
