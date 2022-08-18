import { SitemapItemLoose } from 'sitemap';

import fetchBlogPosts from './fetchBlogPosts';

export default async (): Promise<Array<SitemapItemLoose>> => {
  const blogPosts = await fetchBlogPosts();

  return blogPosts.map((blogPost) => {
    return {
      url: `/post/${blogPost.slug}`,
    };
  });
};
