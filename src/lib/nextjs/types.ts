import { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
import { DocumentInitialProps } from 'next/document';

export type ExtendedAppProps = AppProps & {
  emotionCache: EmotionCache;
};

export type ExtendedDocumentInitialProps = DocumentInitialProps & {
  emotionStyleTags: Array<JSX.Element>;
};
