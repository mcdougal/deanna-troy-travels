import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

interface Props {
  video: YouTubeVideo;
}

const PageMetadata = ({ video }: Props): JSX.Element => {
  const title = video.title;

  const description = video.description;

  const canonicalUrl = `https://www.deannatroytravels.com/videos/${video.videoId}`;

  const imageUrl = cloudinaryLoader({
    src: `/youtube/${video.videoId}`,
    width: 1200,
  });

  const structuredData = getStructuredData({
    canonicalUrl,
    description,
    imageUrl,
    title,
    video,
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
