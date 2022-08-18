import fs from 'fs';
import { Readable } from 'stream';

import { SitemapItemLoose, SitemapStream, streamToPromise } from 'sitemap';

export default async (
  path: string,
  entries: Array<SitemapItemLoose>,
): Promise<void> => {
  const stream = new SitemapStream({
    hostname: `https://www.deannatroytravels.com`,
  });

  const streamResult = await streamToPromise(
    Readable.from(entries).pipe(stream),
  );

  const sitemapString = streamResult.toString();

  fs.writeFileSync(path, sitemapString);
};
