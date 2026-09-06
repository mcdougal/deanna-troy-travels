import type { GetStaticProps } from 'next';

import { SPROUTS_AND_SPILL_DESTINATION_SLUG } from '@lib/destinations';
import { fetchMiscellaneous, Miscellaneous } from '@lib/miscellaneous';

import fetchBlogPosts, {
  BlogPost,
} from '../../DestinationPage/getStaticProps/fetchBlogPosts';
import fetchDestination from '../../DestinationPage/getStaticProps/fetchDestination';
import fetchVideos, {
  YouTubeVideo,
} from '../../DestinationPage/getStaticProps/fetchVideos';

type Props = {
  blogPosts: Array<BlogPost>;
  miscellaneous: Miscellaneous;
  videos: Array<YouTubeVideo>;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  const [destination, miscellaneous] = await Promise.all([
    fetchDestination(SPROUTS_AND_SPILL_DESTINATION_SLUG),
    fetchMiscellaneous(),
  ]);

  if (!destination) {
    return {
      props: {
        blogPosts: [],
        miscellaneous,
        videos: [],
      },
      revalidate: 60,
    };
  }

  const blogPosts = await fetchBlogPosts();
  const destinationBlogPosts = blogPosts.filter((post) => {
    return post.destination?.sys.id === destination.sys.id;
  });

  const videos = destination.youTubePlaylistId
    ? await fetchVideos(destination.youTubePlaylistId)
    : [];

  return {
    props: {
      blogPosts: destinationBlogPosts,
      miscellaneous,
      videos,
    },
    revalidate: 60,
  };
};

export default getStaticProps;
