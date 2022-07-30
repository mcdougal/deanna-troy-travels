import type { GetStaticProps } from 'next';

import { AssetUrls, RecentVideo } from '../types';

import fetchAssetsUrls from './fetchAssetsUrls';
import fetchRecentVideos from './fetchRecentVideos';

interface Props {
  assetUrls: AssetUrls;
  recentVideos: Array<RecentVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      assetUrls: await fetchAssetsUrls(),
      recentVideos: await fetchRecentVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
