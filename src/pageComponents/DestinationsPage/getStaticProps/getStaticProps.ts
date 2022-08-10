import type { GetStaticProps } from 'next';

import fetchDestinations, { Destination } from './fetchDestinations';

interface Props {
  destinations: Array<Destination>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      destinations: await fetchDestinations(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
