import { Theme } from '@mui/material';

export default {
  container: {
    position: `relative`,
  },
  imageContainer: {
    filter: { xs: `brightness(1.1)`, md: `brightness(1.1)` },
    position: `absolute`,
    inset: 0,
    overflow: `hidden`,
  },
  content: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `column`,
    paddingTop: { xs: 4, md: 5 },
    paddingBottom: { xs: 6, md: 38 },
    position: `relative`,
  },
  title: {
    color: `white`,
    textShadow: (theme: Theme): string => {
      const shadowColor = theme.palette.primary.main;
      return `
        0 0 300px ${shadowColor},
        0 0 250px ${shadowColor},
        0 0 50px ${shadowColor},
        0 0 10px ${shadowColor},
        1px 1px 1px ${shadowColor}
      `;
    },
  },
  subtitle: {
    color: `white`,
    borderRadius: 20,
    paddingX: 2,
    marginTop: { xs: 2, md: 2 },
    fontSize: { xs: `caption.fontSize`, md: `1rem` },
    letterSpacing: `0.1em`,
    textShadow: (theme: Theme): string => {
      const shadowColor = theme.palette.primary.main;
      return `
        0 0 300px ${shadowColor},
        0 0 250px ${shadowColor},
        0 0 50px ${shadowColor},
        0 0 10px ${shadowColor},
        1px 1px 1px ${shadowColor}
      `;
    },
    textTransform: `uppercase`,
  },
};
