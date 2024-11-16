import { MediaCard } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';
import { contentfulLoader } from '@lib/contentful';

type BlogPost = {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  title: string;
  youTubeVideoId: string | null;
};

export default (
  blogPost: BlogPost,
): React.ComponentProps<typeof MediaCard>[`thumbnail`] => {
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

  return thumbnail;
};
