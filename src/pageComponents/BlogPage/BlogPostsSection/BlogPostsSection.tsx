import { Box, Grid } from '@mui/material';

import { BlogPostMediaCard, SectionTitle } from '@components/site';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostsSection.styles';

interface Props {
  blogPosts: Array<BlogPost>;
  title: string;
}

const BlogPostsSection = ({ blogPosts, title }: Props): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>{title}</SectionTitle>
      </Box>
      <Grid alignItems="stretch" container spacing={3}>
        {blogPosts.map((blogPost) => {
          return (
            <Grid key={blogPost.slug} item sm={4} xs={12}>
              <BlogPostMediaCard blogPost={blogPost} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default BlogPostsSection;
