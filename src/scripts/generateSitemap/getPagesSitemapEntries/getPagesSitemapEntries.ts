import { SitemapItemLoose } from 'sitemap';

export default (): Array<SitemapItemLoose> => {
  return [
    { url: `/` },
    { url: `/about` },
    { url: `/blog` },
    { url: `/destinations` },
    { url: `/sprouts-and-spill` },
    { url: `/work-with-me` },
  ];
};
