import { fetchAssetUrl, getContentfulClient } from '@lib/contentful';

export interface BlogFeature {
  title: string;
}

export default async (): Promise<Array<BlogFeature>> => {
  const client = getContentfulClient();
  const asset = await client.getEntries({
    content,
  });
};
