import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { createEmotionCache, theme } from '@lib/mui';
import { ExtendedAppProps } from '@lib/nextjs';

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  emotionCache,
  pageProps,
}: ExtendedAppProps): React.ReactElement => {
  return (
    <CacheProvider value={emotionCache || clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
