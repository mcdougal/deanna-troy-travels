import { Box } from '@mui/material';

import { ContentfulImage } from '@components/contentful';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostCoverImage.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostCoverImage = ({ blogPost }: Props): JSX.Element => {
  return (
    <Box sx={sx.coverImageContainer}>
      <ContentfulImage
        alt={blogPost.coverImage.description || `${blogPost.title} cover image`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={blogPost.coverImage.url}
      />
    </Box>
  );
};

export default BlogPostCoverImage;
