import type { GetStaticPaths } from 'next';

import fetchDestinations from './fetchDestinations';

const getStaticPaths: GetStaticPaths = async () => {
  const destinations = await fetchDestinations();

  const destinationsWithPosts = destinations.filter((destination) => {
    return destination.linkedFrom.blogPostCollection.items.length > 0;
  });

  const paths = destinationsWithPosts.map((destination) => {
    return {
      params: {
        destinationSlug: destination.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;