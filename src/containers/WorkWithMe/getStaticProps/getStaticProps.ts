import type { GetStaticProps } from 'next';

import fetchAssetUrls, { AssetUrls } from './fetchAssetUrls';

interface Props {
  assetUrls: AssetUrls;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      assetUrls: await fetchAssetUrls(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
