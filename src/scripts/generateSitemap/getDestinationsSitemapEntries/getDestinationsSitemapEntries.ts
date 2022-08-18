import { SitemapItemLoose } from 'sitemap';

import fetchDestinations from './fetchDestinations';

export default async (): Promise<Array<SitemapItemLoose>> => {
  const destinations = await fetchDestinations();

  return destinations.map((destination) => {
    return {
      url: `/${destination.slug}`,
    };
  });
};
