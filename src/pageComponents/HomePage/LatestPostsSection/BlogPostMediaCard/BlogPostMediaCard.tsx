import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';

import { MediaCard } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost } from '../../getStaticProps';

import sx from './BlogPostMediaCard.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostMediaCard = ({ blogPost }: Props): JSX.Element => {
  return (
    <MediaCard
      details={[
        {
          key: `date`,
          icon: <TodayIcon sx={sx.blogPostDateIcon} />,
          value: new Date(blogPost.publishedDate).toLocaleDateString(),
        },
        {
          key: `destination`,
          icon: <PlaceIcon sx={sx.blogPostDestinationIcon} />,
          value: blogPost.destination.name,
        },
      ]}
      thumbnail={getBlogPostThumbnail(blogPost)}
      title={blogPost.title}
      url={`/post/${blogPost.slug}`}
    />
  );
};

export default BlogPostMediaCard;
