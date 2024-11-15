import { Box, Container, Grid } from '@mui/material';
import Link from 'next/link';

import { BlogPostMediaCard, SectionCta, SectionTitle } from '@components/site';

import { BlogPost } from '../getStaticProps';

import sx from './LatestPostsSection.styles';

interface Props {
  recentBlogPosts: Array<BlogPost>;
}

const LatestPostsSection = ({ recentBlogPosts }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="lg">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Latest Posts</SectionTitle>
      </Box>
      <Grid alignItems="start" container spacing={4}>
        {recentBlogPosts.map((blogPost) => {
          return (
            <Grid key={blogPost.slug} item sm={4} xs={12}>
              <BlogPostMediaCard blogPost={blogPost} />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={sx.ctaContainer}>
        <Link href="/blog" legacyBehavior passHref>
          <SectionCta>See All Posts</SectionCta>
        </Link>
      </Box>
    </Container>
  );
};

export default LatestPostsSection;
