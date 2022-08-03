/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-document-import-in-page */
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/dist/shared/lib/utils';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { createEmotionCache } from '@lib/mui';
import { ExtendedDocumentInitialProps } from '@lib/nextjs';

class Document extends NextDocument<ExtendedDocumentInitialProps> {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            crossOrigin=""
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#da532c" name="msapplication-TileColor" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="en" httpEquiv="Content-Language" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<ExtendedDocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = ():
      | DocumentInitialProps
      | Promise<DocumentInitialProps> => {
      return originalRenderPage({
        enhanceApp: (App) => {
          const EnhanceApp: AppType = (props) => {
            const newProps = {
              ...props,
              emotionCache: cache,
            };

            return <App {...newProps} />;
          };

          return EnhanceApp;
        },
      });
    };

    const initialProps = await NextDocument.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);

    const emotionStyleTags = emotionStyles.styles.map((style) => {
      return (
        <style
          key={style.key}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.css }}
          data-emotion={`${style.key} ${style.ids.join(` `)}`}
        />
      );
    });

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }
}

export default Document;
