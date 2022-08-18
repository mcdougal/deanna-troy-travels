import fs from 'fs';
import { Readable } from 'stream';

import { SitemapIndexStream, SitemapItemLoose, streamToPromise } from 'sitemap';

export default async (
  path: string,
  entries: Array<SitemapItemLoose>,
): Promise<void> => {
  const stream = new SitemapIndexStream();

  const streamResult = await streamToPromise(
    Readable.from(entries).pipe(stream),
  );

  const sitemapString = streamResult.toString();

  fs.writeFileSync(path, sitemapString);
};
