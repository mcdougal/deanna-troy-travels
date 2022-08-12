import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';

import { MediaCard } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';
import { contentfulLoader } from '@lib/contentful';

import { BlogPost } from '../../getStaticProps';

import sx from './BlogPostMediaCard.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostMediaCard = ({ blogPost }: Props): JSX.Element => {
  let thumbnail: React.ComponentProps<typeof MediaCard>[`thumbnail`];

  if (blogPost.youTubeVideoId) {
    thumbnail = {
      alt: blogPost.title,
      loader: cloudinaryLoader,
      url: `/youtube/${blogPost.youTubeVideoId}`,
    };
  } else if (blogPost.coverImage) {
    thumbnail = {
      alt: blogPost.coverImage.description || blogPost.title,
      loader: contentfulLoader,
      url: blogPost.coverImage.url,
    };
  } else {
    thumbnail = {
      alt: blogPost.title,
      loader: cloudinaryLoader,
      url: `/upload/deanna-troy-travels/logo.png`,
    };
  }

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
      thumbnail={thumbnail}
      title={blogPost.title}
      url={`/post/${blogPost.slug}`}
    />
  );
};

export default BlogPostMediaCard;
