import escape from 'escape-html';
import Head from 'next/head';

import { StructuredData } from '@lib/structuredData';

interface Props {
  canonicalUrl: string;
  description: string;
  imageUrl: string;
  structuredData: StructuredData;
  title: string;
  type?: string;
  videoUrl?: string;
}

const HtmlHead = ({
  canonicalUrl,
  description,
  imageUrl,
  structuredData,
  title,
  type,
  videoUrl,
}: Props): JSX.Element => {
  const escapedStructuredData = JSON.stringify(structuredData, (key, value) => {
    return typeof value === `string` ? escape(value) : value;
  });

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" content={description} name="description" />
      <meta key="og:title" content={title} property="og:title" />
      <meta key="og:url" content={canonicalUrl} property="og:url" />
      <meta key="og:image" content={imageUrl} property="og:image" />
      {type && <meta key="og:type" content={type} property="og:type" />}
      {videoUrl && (
        <meta key="og:video" content={videoUrl} property="og:video" />
      )}
      <script
        // We have to render the schema using `dangerouslySetInnerHTML`,
        // because otherwise React will escape some JSON characters (such as
        // double-quotes), causing the structured data block to be invalid.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: escapedStructuredData }}
        type="application/ld+json"
      />
      <link href={canonicalUrl} rel="canonical" />
    </Head>
  );
};

export default HtmlHead;
