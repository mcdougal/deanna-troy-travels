import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

interface Props {
  videos: Array<YouTubeVideo>;
}

const PageMetadata = ({ videos }: Props): JSX.Element => {
  const featuredVideo = videos[0];

  const title = `Travel Videos`;

  const description = featuredVideo.description;

  const canonicalUrl = `https://www.deannatroytravels.com/videos`;

  const imageUrl = cloudinaryLoader({
    src: `/youtube/${featuredVideo.videoId}`,
    width: 1200,
  });

  const structuredData = getStructuredData({
    canonicalUrl,
    description,
    imageUrl,
    title,
    videos,
  });

  return (
    <HtmlHead
      canonicalUrl={canonicalUrl}
      description={description}
      imageUrl={imageUrl}
      structuredData={structuredData}
      title={`${title} | Deanna Troy Travels`}
    />
  );
};

export default PageMetadata;
