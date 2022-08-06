import { ImageLoader } from 'next/image';

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default contentfulLoader;
