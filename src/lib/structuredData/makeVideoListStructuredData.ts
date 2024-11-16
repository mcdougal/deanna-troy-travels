import { StructuredDataObject } from './types';

type Args = {
  videos: Array<StructuredDataObject>;
};

export default ({ videos }: Args): StructuredDataObject => {
  return {
    '@type': `ItemList`,
    itemListElement: videos.map((video, i) => {
      return {
        ...video,
        position: i,
      };
    }),
  };
};
