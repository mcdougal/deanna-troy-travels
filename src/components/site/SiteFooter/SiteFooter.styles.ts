import { spacing } from '@lib/mui';

export default {
  siteFooter: {
    backgroundColor: `grey.50`,
    paddingBottom: { xs: 10, md: 15 },
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
    marginX: `auto`,
    maxWidth: 650,
  },
  navItemContainer: {
    marginBottom: 2,
    textAlign: `center`,
  },
};
