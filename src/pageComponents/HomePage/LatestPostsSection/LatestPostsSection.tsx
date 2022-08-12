import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Grid } from '@mui/material';
import Link from 'next/link';

import { SectionTitle } from '@components/site';

import { BlogPost } from '../getStaticProps';

import BlogPostMediaCard from './BlogPostMediaCard';
import sx from './LatestPostsSection.styles';

interface Props {
  recentBlogPosts: Array<BlogPost>;
}

const LatestPostsSection = ({ recentBlogPosts }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Latest Posts 📰</SectionTitle>
      </Box>
      <Grid alignItems="stretch" container spacing={2}>
        {recentBlogPosts.map((blogPost) => {
          return (
            <Grid key={blogPost.slug} item sm={4} xs={12}>
              <BlogPostMediaCard blogPost={blogPost} />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={sx.ctaContainer}>
        <Link href="/blog" passHref>
          <Button
            color="primary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            size="large"
            variant="contained">
            All Posts
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default LatestPostsSection;
