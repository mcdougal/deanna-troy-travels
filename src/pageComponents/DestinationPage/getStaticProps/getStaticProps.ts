import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchBlogPosts, { BlogPost } from './fetchBlogPosts';
import fetchDestination, { Destination } from './fetchDestination';
import fetchDestinations from './fetchDestinations';
import fetchVideos, { YouTubeVideo } from './fetchVideos';

type Params = ParsedUrlQuery & {
  destinationSlug: string;
};

type Props = {
  blogPosts: Array<BlogPost>;
  destination: Destination | null;
  destinations: Array<Destination>;
  videos: Array<YouTubeVideo>;
};

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { destinationSlug } = params || {};

  if (!destinationSlug) {
    throw new Error(`URL missing destination slug`);
  }

  const destinations = await fetchDestinations();
  const blogPosts = await fetchBlogPosts();

  if (destinationSlug === `blog`) {
    return {
      props: {
        blogPosts,
        destination: null,
        destinations,
        videos: [],
      },
      revalidate: 60,
    };
  }

  const destination = await fetchDestination(destinationSlug);

  if (!destination) {
    return {
      notFound: true,
    };
  }

  const destinationBlogPosts = blogPosts.filter((post) => {
    return post.destination?.sys.id === destination.sys.id;
  });

  const videos = destination.youTubePlaylistId
    ? await fetchVideos(destination.youTubePlaylistId)
    : [];

  return {
    props: {
      blogPosts: destinationBlogPosts,
      destination,
      destinations,
      videos,
    },
    revalidate: 60,
  };
};

export default getStaticProps;
