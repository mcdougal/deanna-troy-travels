import type { GetStaticProps } from 'next';

import fetchDestinations, { Destination } from './fetchDestinations';
import sortDestinations from './sortDestinations';

type Props = {
  destinations: Array<Destination>;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  const destinations = await fetchDestinations();

  return {
    props: {
      destinations: sortDestinations(destinations),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
