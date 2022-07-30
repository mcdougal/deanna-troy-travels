import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: `#386bc2`,
      main: `#4686F2`,
      dark: `#6b9ef5`,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: `Fredoka, Arial`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      letterSpacing: `0.1em`,
      fontWeight: 700,
    },
    h2: {
      letterSpacing: `0.1em`,
      fontWeight: 700,
    },
    h3: {
      letterSpacing: `0.1em`,
      fontWeight: 700,
    },
    h4: {
      letterSpacing: `0.1em`,
      fontWeight: 700,
    },
    h5: {
      letterSpacing: `0.1em`,
      fontWeight: 700,
    },
    h6: {
      letterSpacing: `0.1em`,
      fontWeight: 700,
    },
    subtitle1: {
      letterSpacing: `0.1em`,
    },
    subtitle2: {
      letterSpacing: `0.1em`,
    },
    body1: {
      letterSpacing: `0.1em`,
      lineHeight: 1.8,
    },
    body2: {
      letterSpacing: `0.1em`,
    },
    caption: {
      letterSpacing: `0.1em`,
    },
    overline: {
      letterSpacing: `0.1em`,
    },
    button: {
      letterSpacing: `0.1em`,
    },
  },
});

export default responsiveFontSizes(theme);
