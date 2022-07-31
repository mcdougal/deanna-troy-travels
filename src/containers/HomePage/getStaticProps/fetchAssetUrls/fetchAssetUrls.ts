import { fetchAssetUrl } from '@lib/contentful';

export interface AssetUrls {
  heroImageMobile: string;
  youTubeLogo: string;
  workWithMe: string;
}

export default async (): Promise<AssetUrls> => {
  return {
    heroImageMobile: await fetchAssetUrl(`2wuq3w9NU57E2WhzPTDYOI`),
    youTubeLogo: await fetchAssetUrl(`6o9bRHadNfh3CztgulcHqn`),
    workWithMe: await fetchAssetUrl(`5YU47gJrSD20DYEhvrvDsC`),
  };
};
