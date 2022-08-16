import { Box, Chip } from '@mui/material';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostTags.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostTags = ({ blogPost }: Props): JSX.Element => {
  return (
    <Box sx={sx.tagsContainer}>
      {blogPost.tags.map((tag) => {
        return <Chip key={tag} label={tag} size="small" variant="outlined" />;
      })}
    </Box>
  );
};

export default BlogPostTags;
