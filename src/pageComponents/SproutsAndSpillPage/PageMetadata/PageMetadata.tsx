import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../../DestinationPage/getStaticProps/fetchVideos';

import getStructuredData from './getStructuredData';

type Props = {
  videos: Array<YouTubeVideo>;
};

const PageMetadata = ({ videos }: Props): JSX.Element => {
  const title = `Sprouts and Spill`;

  const description = `Sprouts and Spill is a Connecticut podcast hosted by Deanna Troy Travels and Soumya Argawal, celebrating vegan, vegetarian, and plant-based food and lifestyles.`;

  const canonicalUrl = `https://www.deannatroytravels.com/sprouts-and-spill`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/sprouts-and-spill/sprouts-and-spill-logo.png`,
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
      imageAlt="Sprouts and Spill podcast logo"
      imageUrl={imageUrl}
      structuredData={structuredData}
      title={`${title} Podcast | Deanna Troy Travels`}
    />
  );
};

export default PageMetadata;
