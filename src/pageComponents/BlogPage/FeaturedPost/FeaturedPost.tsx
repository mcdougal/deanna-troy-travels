import { Box, Button, Typography } from '@mui/material';

import { ContentfulImage } from '@components/contentful';

import { BlogPost } from '../getStaticProps';

import sx from './FeaturedPost.styles';

interface Props {
  blogPost: BlogPost;
}

const FeaturedPost = ({ blogPost }: Props): JSX.Element => {
  return (
    <Box sx={sx.featuredPostContainer}>
      <Typography sx={sx.featuredPostLabel} variant="body1">
        ✨ Featured Post
      </Typography>
      <Box sx={sx.coverImageContainer}>
        <ContentfulImage
          alt={
            blogPost.coverImage.description || `${blogPost.title} cover image`
          }
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          src={blogPost.coverImage.url}
        />
      </Box>
      <Box sx={sx.featuredPostContent}>
        <Typography sx={sx.title} variant="h4">
          {blogPost.title}
        </Typography>
        <Typography color="textSecondary" sx={sx.excerpt} variant="body2">
          {blogPost.excerpt}
        </Typography>
        <Button color="primary" fullWidth size="large" variant="contained">
          Read Post
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedPost;
