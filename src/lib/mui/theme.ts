import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import colors from './colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: `#556cd6`,
    },
    secondary: {
      light: colors.salmonLight,
      main: colors.salmonMain,
      dark: colors.salmonDark,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: `'Open Sans', Arial`,
    h1: {
      fontFamily: `Playfair Display, Arial`,
    },
    h2: {
      fontFamily: `Playfair Display, Arial`,
    },
    h3: {
      fontFamily: `Playfair Display, Arial`,
    },
    h4: {
      fontFamily: `Playfair Display, Arial`,
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
    button: {
      letterSpacing: `0.1em`,
    },
  },
});

export default responsiveFontSizes(theme);
