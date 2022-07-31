import { fetchAssetUrl } from '@lib/contentful';

export interface AssetUrls {
  asSeenOnGlobe: string;
  youTubeLogo: string;
}

export default async (): Promise<AssetUrls> => {
  return {
    asSeenOnGlobe: await fetchAssetUrl(`5LaH9QGDxnxmE5wa91JUNh`),
    youTubeLogo: await fetchAssetUrl(`6o9bRHadNfh3CztgulcHqn`),
  };
};
