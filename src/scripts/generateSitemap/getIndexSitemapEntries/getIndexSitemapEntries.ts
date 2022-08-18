import { SitemapItemLoose } from 'sitemap';

export default (): Array<SitemapItemLoose> => {
  return [
    {
      url: `/sitemap/pages.xml`,
    },
    {
      url: `/sitemap/destinations.xml`,
    },
    {
      url: `/sitemap/posts.xml`,
    },
  ];
};
