import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchDestination, { Destination } from './fetchDestination';

interface Params extends ParsedUrlQuery {
  destinationSlug: string;
}

interface Props {
  destination: Destination;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { destinationSlug } = params || {};

  if (!destinationSlug) {
    throw new Error(`URL missing destination slug`);
  }

  return {
    props: {
      destination: await fetchDestination(destinationSlug),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
