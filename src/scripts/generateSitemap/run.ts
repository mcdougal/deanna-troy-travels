/* eslint-disable no-console */
import 'dotenv/config';

import fs from 'fs';

import getDestinationsSitemapEntries from './getDestinationsSitemapEntries';
import getIndexSitemapEntries from './getIndexSitemapEntries';
import getPagesSitemapEntries from './getPagesSitemapEntries';
import getPostsSitemapEntries from './getPostsSitemapEntries';
import getVideosSitemapEntries from './getVideosSitemapEntries';
import writeSitemap from './writeSitemap';
import writeSitemapIndex from './writeSitemapIndex';

const run = async (): Promise<void> => {
  console.log(`info  - Generating sitemap...`);

  fs.mkdirSync(`./public/sitemap`, { recursive: true });

  console.log(`info  - Generating sitemap index...`);
  await writeSitemapIndex(`./public/sitemap.xml`, getIndexSitemapEntries());

  console.log(`info  - Generating pages sitemap...`);
  await writeSitemap(`./public/sitemap/pages.xml`, getPagesSitemapEntries());

  console.log(`info  - Generating destinations sitemap...`);
  await writeSitemap(
    `./public/sitemap/destinations.xml`,
    await getDestinationsSitemapEntries(),
  );

  console.log(`info  - Generating posts sitemap...`);
  await writeSitemap(
    `./public/sitemap/posts.xml`,
    await getPostsSitemapEntries(),
  );

  console.log(`info  - Generating videos sitemap...`);
  await writeSitemap(
    `./public/sitemap/videos.xml`,
    await getVideosSitemapEntries(),
  );

  console.log(`info  - Sitemap generated successfully`);
};

if (require.main === module) {
  process.on(`unhandledRejection`, (error) => {
    throw error;
  });

  run();
}
