import type { GetStaticPaths } from 'next';

import { isCustomDestinationPage } from '@lib/destinations';

import fetchDestinations from './fetchDestinations';

const getStaticPaths: GetStaticPaths = async () => {
  const destinations = await fetchDestinations();

  const destinationsWithContent = destinations.filter((destination) => {
    return (
      (destination.linkedFrom.blogPostCollection.items.length > 0 ||
        Boolean(destination.youTubePlaylistId)) &&
      !isCustomDestinationPage(destination.slug)
    );
  });

  const allPath = {
    params: {
      destinationSlug: `blog`,
    },
  };

  const paths = destinationsWithContent.map((destination) => {
    return {
      params: {
        destinationSlug: destination.slug,
      },
    };
  });

  return {
    paths: [allPath, ...paths],
    fallback: false,
  };
};

export default getStaticPaths;
