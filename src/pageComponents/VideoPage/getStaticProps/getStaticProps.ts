import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchRelatedVideos, { RelatedYouTubeVideo } from './fetchRelatedVideos';
import fetchVideo, { YouTubeVideo } from './fetchVideo';

interface Params extends ParsedUrlQuery {
  videoId: string;
}

interface Props {
  relatedVideos: Array<RelatedYouTubeVideo>;
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
      relatedVideos: await fetchRelatedVideos(video),
      video,
    },
    revalidate: 60,
  };
};

export default getStaticProps;
