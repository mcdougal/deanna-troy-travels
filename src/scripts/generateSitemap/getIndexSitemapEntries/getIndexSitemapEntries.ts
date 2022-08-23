import { SitemapItemLoose } from 'sitemap';

export default (): Array<SitemapItemLoose> => {
  return [
    {
      url: `https://www.deannatroytravels.com/sitemap/pages.xml`,
    },
    {
      url: `https://www.deannatroytravels.com/sitemap/destinations.xml`,
    },
    {
      url: `https://www.deannatroytravels.com/sitemap/posts.xml`,
    },
    {
      url: `https://www.deannatroytravels.com/sitemap/videos.xml`,
    },
  ];
};
