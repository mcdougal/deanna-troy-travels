import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';
import { Miscellaneous } from '@lib/miscellaneous';

import getStructuredData from './getStructuredData';

type Props = {
  miscellaneous: Miscellaneous;
};

const PageMetadata = ({ miscellaneous }: Props): JSX.Element => {
  const title = miscellaneous.workWithMeTitle.text;

  const description = `Deanna is a travel influencer who creates YouTube content featuring budget-friendly and vegetarian travel experiences in Southeast Asia, the U.S.A. and Europe.`;

  const canonicalUrl = `https://www.deannatroytravels.com/work-with-me`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/work-with-me/og-image.png`,
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
