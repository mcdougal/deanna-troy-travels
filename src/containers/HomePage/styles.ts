import { SxProps, Theme } from '@mui/material';

import { colors } from '@lib/mui';

const styles: { [className: string]: SxProps<Theme> } = {
  header: {
    alignItems: `flex-end`,
    display: `flex`,
    paddingBottom: 4,
    paddingTop: 2,
  },
  mastheadContainer: {
    alignItems: `center`,
    display: `flex`,
    flex: 1,
  },
  titleContainer: {
    marginLeft: 2,
  },
  title: {
    marginBottom: 1,
  },
  subtitle: {
    marginLeft: 6,
  },
  navItem: {
    marginLeft: 2,
  },
  heroContainer: {
    marginBottom: 20,
    position: `relative`,
    width: `calc(100% - 32px)`,
    '::before': {
      backgroundColor: colors.salmonLight,
      bottom: -32,
      content: `''`,
      display: `block`,
      position: `absolute`,
      right: -32,
      width: `100%`,
      height: `100%`,
    },
  },
  heroVideoContainer: {
    backgroundColor: `#000`,
    display: `flex`,
    position: `relative`,
  },
  heroVideo: {
    aspectRatio: `1920 / 1080`,
    opacity: 0.5,
    width: `100%`,
  },
  aboutMeContainer: {
    display: `flex`,
    '> :nth-child(1)': {
      padding: 5,
      paddingLeft: 0,
    },
    '> :nth-child(2)': {
      background: colors.salmonLight,
      padding: 5,
    },
    '> :nth-child(3)': {
      padding: 5,
      paddingRight: 0,
    },
  },
  footer: {
    background: colors.salmonLight,
    marginTop: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  footerLogoContainer: {
    display: `flex`,
    padding: 2,
  },
  footerTitleContainer: {
    marginLeft: 3,
  },
  footerTitle: {
    marginBottom: 2,
  },
  footerSubtitle: {
    marginLeft: 6,
  },
  footerNavContainer: {
    display: `flex`,
    justifyContent: `flex-end`,
    marginTop: 2,
  },
};

export default styles;
