import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

type Props = {
  recentVideos: Array<YouTubeVideo>;
};

const PageMetadata = ({ recentVideos }: Props): JSX.Element => {
  const title = `Deanna Troy Travels`;

  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;

  const canonicalUrl = `https://www.deannatroytravels.com`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/home/og-image.jpg`,
    width: 1200,
  });

  const structuredData = getStructuredData({
    canonicalUrl,
    description,
    imageUrl,
    recentVideos,
    title,
  });

  return (
    <HtmlHead
      canonicalUrl={canonicalUrl}
      description={description}
      imageUrl={imageUrl}
      structuredData={structuredData}
      title={title}
    />
  );
};

export default PageMetadata;
