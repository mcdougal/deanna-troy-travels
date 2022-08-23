import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchVideo, { YouTubeVideo } from './fetchVideo';

interface Params extends ParsedUrlQuery {
  videoId: string;
}

interface Props {
  video: YouTubeVideo;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { videoId } = params || {};

  if (!videoId) {
    throw new Error(`URL missing YouTube videoId`);
  }

  const video = await fetchVideo(videoId);

  if (!video) {
    throw new Error(`No YouTube video with ID: ${videoId}`);
  }

  return {
    props: {
      video,
    },
    revalidate: 60,
  };
};

export default getStaticProps;
