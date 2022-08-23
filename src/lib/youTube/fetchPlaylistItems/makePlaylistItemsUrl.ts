export default (
  playlistId: string,
  maxResults: number,
  nextPageToken?: string,
): string => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  const queryParams = [
    `key=${GOOGLE_CLOUD_API_KEY}`,
    `maxResults=${maxResults}`,
    `part=contentDetails,snippet,status`,
    `playlistId=${playlistId}`,
    nextPageToken ? `pageToken=${nextPageToken}` : null,
  ];

  const queryParamsString = queryParams.filter(Boolean).join(`&`);

  return `https://www.googleapis.com/youtube/v3/playlistItems?${queryParamsString}`;
};
