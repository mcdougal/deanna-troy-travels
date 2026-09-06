import { SitemapItemLoose } from 'sitemap';

import { isCustomDestinationPage } from '@lib/destinations';

import fetchDestinations from './fetchDestinations';

export default async (): Promise<Array<SitemapItemLoose>> => {
  const destinations = await fetchDestinations();

  return destinations
    .filter((destination) => {
      return !isCustomDestinationPage(destination.slug);
    })
    .map((destination) => {
      return {
        url: `/${destination.slug}`,
      };
    });
};
