/* eslint-disable no-console */
import 'dotenv/config';

import fs from 'fs';

import getDestinationsSitemapEntries from './getDestinationsSitemapEntries';
import getIndexSitemapEntries from './getIndexSitemapEntries';
import getPagesSitemapEntries from './getPagesSitemapEntries';
import writeSitemap from './writeSitemap';

const run = async (): Promise<void> => {
  console.log(`info  - Generating sitemap...`);

  fs.mkdirSync(`./public/sitemap`, { recursive: true });

  console.log(`info  - Generating sitemap index...`);
  await writeSitemap(`./public/sitemap.xml`, getIndexSitemapEntries());

  console.log(`info  - Generating pages sitemap...`);
  await writeSitemap(`./public/sitemap/pages.xml`, getPagesSitemapEntries());

  console.log(`info  - Generating destinations sitemap...`);
  await writeSitemap(
    `./public/sitemap/destinations.xml`,
    await getDestinationsSitemapEntries(),
  );

  console.log(`info  - Sitemap generated successfully`);
};

if (require.main === module) {
  process.on(`unhandledRejection`, (error) => {
    throw error;
  });

  run();
}
