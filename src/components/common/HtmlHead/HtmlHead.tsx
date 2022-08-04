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
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <link href={canonicalUrl} rel="canonical" />
    </Head>
  );
};

export default HtmlHead;
