import type { GetStaticProps } from 'next';

import { fetchMiscellaneous, Miscellaneous } from '@lib/miscellaneous';

type Props = {
  miscellaneous: Miscellaneous;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      miscellaneous: await fetchMiscellaneous(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
