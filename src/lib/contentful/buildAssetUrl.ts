export default (assetId: string, imageId: string): string => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

  if (!CONTENTFUL_SPACE_ID) {
    throw new Error(`Missing environment variable: CONTENTFUL_SPACE_ID`);
  }

  if (!CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(`Missing environment variable: CONTENTFUL_ACCESS_TOKEN`);
  }

  const path = [CONTENTFUL_SPACE_ID, assetId, imageId];

  return `https://images.ctfassets.net/${path.join(`/`)}`;
};
