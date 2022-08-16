import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchDestination, { Destination } from './fetchDestination';
import fetchRecentVideos, { YouTubeVideo } from './fetchRecentVideos';

interface Params extends ParsedUrlQuery {
  destinationSlug: string;
}

interface Props {
  destination: Destination;
  recentVideos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { destinationSlug } = params || {};

  if (!destinationSlug) {
    throw new Error(`URL missing destination slug`);
  }

  const destination = await fetchDestination(destinationSlug);

  const recentVideos = destination.youTubePlaylistId
    ? await fetchRecentVideos(destination.youTubePlaylistId)
    : [];

  return {
    props: {
      destination,
      recentVideos,
    },
    revalidate: 60,
  };
};

export default getStaticProps;
