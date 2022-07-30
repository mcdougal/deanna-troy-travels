import { fetchAssetUrl } from '@lib/contentful';

import { AssetUrls } from '../../types';

export default async (): Promise<AssetUrls> => {
  return {
    heroImageMobile: await fetchAssetUrl(`2wuq3w9NU57E2WhzPTDYOI`),
    youTubeLogo: await fetchAssetUrl(`6o9bRHadNfh3CztgulcHqn`),
  };
};
