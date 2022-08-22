import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';

import { BlogPostMediaCard, SectionTitle } from '@components/site';

import { RelatedBlogPost } from '../getStaticProps';

import sx from './RelatedPostsSection.styles';

interface Props {
  relatedBlogPosts: Array<RelatedBlogPost>;
}

const RelatedPostsSection = ({ relatedBlogPosts }: Props): JSX.Element => {
  return (
    <Box component="section">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Related Posts</SectionTitle>
      </Box>
      <Grid alignItems="stretch" container spacing={2}>
        {relatedBlogPosts.map((blogPost) => {
          return (
            <Grid key={blogPost.slug} item sm={6} xs={12}>
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
    </Box>
  );
};

export default RelatedPostsSection;
