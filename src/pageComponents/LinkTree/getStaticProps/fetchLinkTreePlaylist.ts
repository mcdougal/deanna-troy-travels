import { fetchContentfulGraphQl } from '@lib/contentful';

export type LinkTreePlaylist = {
  playlistId: string;
  playlistTitle: string;
};

export default async (): Promise<LinkTreePlaylist | null> => {
  const response = await fetchContentfulGraphQl<{
    linkTreePlaylistCollection: {
      items: Array<LinkTreePlaylist>;
    };
  }>(
    `
      query LinkTreeGetStaticPropsLinkTreePlaylists {
        linkTreePlaylistCollection {
          items {
            playlistId
            playlistTitle
          }
        }
      }
    `,
  );

  const { items } = response.linkTreePlaylistCollection;

  return items.length > 0 ? items[0] : null;
};
