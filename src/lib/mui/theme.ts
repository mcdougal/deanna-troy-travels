import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: `0.85em`,
          paddingBottom: `12px`,
          paddingLeft: `32px`,
          paddingRight: `32px`,
          paddingTop: `12px`,
          textTransform: `none`,
        },
      },
    },
  },
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
      letterSpacing: `0.04em`,
      lineHeight: 1.8,
    },
    body2: {
      letterSpacing: `0.04em`,
    },
    caption: {
      letterSpacing: `0.04em`,
    },
    overline: {
      letterSpacing: `0.04em`,
    },
    button: {
      letterSpacing: `0.1em`,
      fontSize: `0.9rem`,
    },
  },
});

export default responsiveFontSizes(theme);
