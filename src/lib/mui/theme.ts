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
        text: {
          paddingLeft: `16px`,
          paddingRight: `16px`,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: `24px`,
          paddingRight: `24px`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
        paperFullScreen: {
          borderRadius: 0,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: `24px`,
        },
      },
    },
    MuiDialogTitle: {
      defaultProps: {
        variant: `h4`,
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
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
    secondary: {
      light: `#ff1a1a`,
      main: `#ff0000`,
      dark: `#cc0000`,
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
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
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
