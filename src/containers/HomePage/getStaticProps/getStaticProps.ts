import type { GetStaticProps } from 'next';

import { AssetUrls, RecentVideo } from '../types';

import fetchAssetUrls from './fetchAssetUrls';
import fetchRecentVideos from './fetchRecentVideos';

interface Props {
  assetUrls: AssetUrls;
  recentVideos: Array<RecentVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      assetUrls: await fetchAssetUrls(),
      recentVideos: await fetchRecentVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
