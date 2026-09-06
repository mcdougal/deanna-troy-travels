import escape from 'escape-html';
import Head from 'next/head';

import { StructuredData } from '@lib/structuredData';

type Props = {
  canonicalUrl: string;
  description: string;
  imageAlt?: string;
  imageUrl: string;
  structuredData: StructuredData;
  title: string;
  type?: string;
  videoUrl?: string;
};

const HtmlHead = ({
  canonicalUrl,
  description,
  imageAlt,
  imageUrl,
  structuredData,
  title,
  type,
  videoUrl,
}: Props): JSX.Element => {
  const resolvedImageAlt = imageAlt || title;

  const escapedStructuredData = JSON.stringify(structuredData, (key, value) => {
    return typeof value === `string` ? escape(value) : value;
  });

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" content={description} name="description" />
      <meta key="og:title" content={title} property="og:title" />
      <meta
        key="og:description"
        content={description}
        property="og:description"
      />
      <meta key="og:url" content={canonicalUrl} property="og:url" />
      <meta key="og:image" content={imageUrl} property="og:image" />
      <meta
        key="og:image:alt"
        content={resolvedImageAlt}
        property="og:image:alt"
      />
      {type && <meta key="og:type" content={type} property="og:type" />}
      {videoUrl && (
        <meta key="og:video" content={videoUrl} property="og:video" />
      )}
      <meta key="twitter:card" content="summary_large_image" name="twitter:card" />
      <meta key="twitter:title" content={title} name="twitter:title" />
      <meta
        key="twitter:description"
        content={description}
        name="twitter:description"
      />
      <meta key="twitter:image" content={imageUrl} name="twitter:image" />
      <meta
        key="twitter:image:alt"
        content={resolvedImageAlt}
        name="twitter:image:alt"
      />
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
