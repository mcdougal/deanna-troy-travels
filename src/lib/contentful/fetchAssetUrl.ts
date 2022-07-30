import getContentfulClient from './getContentfulClient';

export default async (assetId: string): Promise<string> => {
  const client = getContentfulClient();
  const asset = await client.getAsset(assetId);

  return asset.fields.file.url;
};
