import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';

import { MediaCard } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import sx from './BlogPostMediaCard.styles';

type BlogPost = {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  destination: {
    name: string;
  } | null;
  excerpt: string;
  publishedDate: string;
  title: string;
  slug: string;
  youTubeVideoId: string | null;
};

type Props = {
  blogPost: BlogPost;
  size?: `sm` | `md` | `lg`;
};

const BlogPostMediaCard = ({ blogPost, size = `sm` }: Props): JSX.Element => {
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
      description={blogPost.excerpt}
      details={details}
      size={size}
      thumbnail={getBlogPostThumbnail(blogPost)}
      title={blogPost.title}
      url={`/post/${blogPost.slug}`}
    />
  );
};

export default BlogPostMediaCard;
