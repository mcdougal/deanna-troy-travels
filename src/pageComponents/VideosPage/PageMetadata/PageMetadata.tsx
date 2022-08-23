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

  const description = `Budget friendly Southeast Asia & Asia destinations to cure your wanderlust! Deanna has been to 17 countries total and is sharing her experiences with future travelers! Her video playlists "Vibrant Vietnam", "Totally Tokyo", "Mighty Malaysia", "Fabulous Philippines" and "Amazing America" give great itinerary suggestions while also giving insight into local life. Follow her journey here on YouTube to plan your next trip!`;

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
