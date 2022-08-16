import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';

import { MediaCard } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import sx from './BlogPostMediaCard.styles';

interface BlogPost {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  destination: {
    name: string;
  } | null;
  publishedDate: string;
  title: string;
  slug: string;
  youTubeVideoId: string | null;
}

interface Props {
  blogPost: BlogPost;
}

const BlogPostMediaCard = ({ blogPost }: Props): JSX.Element => {
  const details: React.ComponentProps<typeof MediaCard>[`details`] = [
    {
      key: `date`,
      icon: <TodayIcon sx={sx.blogPostDateIcon} />,
      value: new Date(blogPost.publishedDate).toLocaleDateString(),
    },
  ];

  if (blogPost.destination) {
    details.push({
      key: `destination`,
      icon: <PlaceIcon sx={sx.blogPostDestinationIcon} />,
      value: blogPost.destination.name,
    });
  }

  return (
    <MediaCard
      details={details}
      thumbnail={getBlogPostThumbnail(blogPost)}
      title={blogPost.title}
      url={`/post/${blogPost.slug}`}
    />
  );
};

export default BlogPostMediaCard;
