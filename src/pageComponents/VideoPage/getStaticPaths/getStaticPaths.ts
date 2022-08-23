import type { GetStaticPaths } from 'next';

import fetchVideos from './fetchVideos';

const getStaticPaths: GetStaticPaths = async () => {
  const videos = await fetchVideos();

  const paths = videos.map((video) => {
    return {
      params: {
        videoId: video.videoId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;
