/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageLoader, ImageProps } from 'next/image';

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: ImageProps): React.ReactElement => {
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
