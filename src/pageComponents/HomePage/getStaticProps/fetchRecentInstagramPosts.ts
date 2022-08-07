import { fetchInstagramMediaItems } from '@lib/instagram';

export interface InstagramPost {
  id: string;
  caption: string | null;
  permalink: string;
}

export default async (): Promise<Array<InstagramPost>> => {
  const recentMediaItems = await fetchInstagramMediaItems();

  const instagramPosts: Array<InstagramPost> = [];

  recentMediaItems.forEach((recentMediaItem) => {
    if (!recentMediaItem.permalink) {
      return;
    }

    instagramPosts.push({
      id: recentMediaItem.id,
      caption: recentMediaItem.caption || null,
      permalink: recentMediaItem.permalink,
    });
  });

  return instagramPosts.slice(0, 24);
};
