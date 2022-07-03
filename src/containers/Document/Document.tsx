/* eslint-disable @next/next/no-document-import-in-page */
import createEmotionServer from '@emotion/server/types/create-instance';
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
        <Head>{this.props.emotionStyleTags}</Head>
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
          data-emotion={`${style.key} ${style.ids.join(` `)}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.css }}
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
