import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchDestination, { Destination } from './fetchDestination';
import fetchVideos, { YouTubeVideo } from './fetchVideos';

interface Params extends ParsedUrlQuery {
  destinationSlug: string;
}

interface Props {
  destination: Destination;
  videos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { destinationSlug } = params || {};

  if (!destinationSlug) {
    throw new Error(`URL missing destination slug`);
  }

  const destination = await fetchDestination(destinationSlug);

  const videos = destination.youTubePlaylistId
    ? await fetchVideos(destination.youTubePlaylistId)
    : [];

  return {
    props: {
      destination,
      videos,
    },
    revalidate: 60,
  };
};

export default getStaticProps;
