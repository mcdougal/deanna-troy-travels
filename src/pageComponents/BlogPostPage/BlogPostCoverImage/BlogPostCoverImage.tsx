import { Box } from '@mui/material';
import Image from 'next/image';

import { contentfulLoader } from '@lib/contentful';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostCoverImage.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostCoverImage = ({ blogPost }: Props): JSX.Element => {
  return (
    <Box sx={sx.coverImageContainer}>
      <Image
        alt={blogPost.coverImage.description || `${blogPost.title} cover image`}
        layout="fill"
        loader={contentfulLoader}
        objectFit="cover"
        objectPosition="50% 25%"
        priority
        src={blogPost.coverImage.url}
      />
    </Box>
  );
};

export default BlogPostCoverImage;
