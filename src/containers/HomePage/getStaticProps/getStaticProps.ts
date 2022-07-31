import type { GetStaticProps } from 'next';

import fetchAssetUrls, { AssetUrls } from './fetchAssetUrls';
import fetchRecentVideos, { RecentVideo } from './fetchRecentVideos';

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
