/* eslint-disable no-console */
import fs from 'fs';

import { Feed } from 'feed';

import fetchRecentBlogPosts from './fetchRecentBlogPosts';

const run = async (): Promise<void> => {
  console.log(`info  - Generating RSS feed...`);

  console.log(`info  - Fetching recent blog posts...`);

  const recentBlogPosts = await fetchRecentBlogPosts();

  const feed = new Feed({
    title: `Deanna Troy Travels`,
    description: `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`,
    id: `https://www.deannatroytravels.com`,
    link: `https://www.deannatroytravels.com`,
    language: `en`,
    image: `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659612637/deanna-troy-travels/home/og-image.jpg`,
    favicon: `https://www.deannatroytravels.com/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Deanna Troy Travels. All rights reserved.`,
    feedLinks: {
      rss2: `https://www.deannatroytravels.com/rss/feed.xml`,
      json: `https://www.deannatroytravels.com/rss/feed.json`,
    },
    author: {
      name: `Deanna Troy Travels`,
      email: `deanna.troy.henry@gmail.com`,
      link: `https://www.deannatroytravels.com/about`,
    },
  });

  recentBlogPosts.forEach((blogPost) => {
    feed.addItem({
      title: blogPost.title,
      id: `https://www.deannatroytravels.com/post/${blogPost.slug}`,
      link: `https://www.deannatroytravels.com/post/${blogPost.slug}`,
      description: blogPost.excerpt,
      content: blogPost.excerpt,
      author: [
        {
          name: `Deanna Troy Travels`,
          email: `deanna.troy.henry@gmail.com`,
          link: `https://www.deannatroytravels.com/about`,
        },
      ],
      date: new Date(blogPost.date),
      image: blogPost.coverImage.url,
    });
  });

  console.log(`info  - Writing RSS feed files to disk...`);

  fs.mkdirSync(`./public/rss`, { recursive: true });
  fs.writeFileSync(`./public/rss/feed.xml`, feed.rss2());
  fs.writeFileSync(`./public/rss/feed.json`, feed.json1());

  console.log(`info  - RSS feed generated successfully`);
};

if (require.main === module) {
  process.on(`unhandledRejection`, (error) => {
    throw error;
  });

  run();
}
