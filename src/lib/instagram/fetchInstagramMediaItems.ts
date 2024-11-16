/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

const DEANNA_TROY_TRAVELS_USER_ID = `17841402384050982`;

export type InstagramMediaItem = {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp: string;
};

type InstagramMediaResponse = {
  data: Array<InstagramMediaItem>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
};

export default async (): Promise<Array<InstagramMediaItem>> => {
  const { INSTAGRAM_ACCESS_TOKEN } = process.env;

  if (!INSTAGRAM_ACCESS_TOKEN) {
    throw new Error(`Missing environment variable: INSTAGRAM_ACCESS_TOKEN`);
  }

  const mediaUrl = `https://graph.instagram.com/v14.0/${DEANNA_TROY_TRAVELS_USER_ID}/media?${[
    `access_token=${INSTAGRAM_ACCESS_TOKEN}`,
    `fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp`,
  ].join(`&`)}`;

  const mediaResponse = await axios.get<InstagramMediaResponse>(mediaUrl);

  return mediaResponse.data.data;
};
