import { SitemapItemLoose } from 'sitemap';

export default (): Array<SitemapItemLoose> => {
  return [
    { url: `/` },
    { url: `/about` },
    { url: `/blog` },
    { url: `/destinations` },
    { url: `/videos` },
    { url: `/work-with-me` },
  ];
};
