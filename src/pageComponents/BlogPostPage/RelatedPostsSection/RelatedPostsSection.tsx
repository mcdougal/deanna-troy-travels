import { Box, Grid } from '@mui/material';
import Link from 'next/link';

import {
  BlogPostMediaCard,
  GlobalAboutSection,
  SectionCta,
  SectionTitle,
} from '@components/site';

import { RelatedBlogPost } from '../getStaticProps';

import sx from './RelatedPostsSection.styles';

type Props = {
  relatedBlogPosts: Array<RelatedBlogPost>;
};

const RelatedPostsSection = ({ relatedBlogPosts }: Props): JSX.Element => {
  return (
    <Box component="section">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Related Posts</SectionTitle>
      </Box>
      <Box sx={sx.content}>
        <Box>
          <Grid alignItems="start" columnSpacing={2} container rowSpacing={5}>
            {relatedBlogPosts.map((blogPost) => {
              return (
                <Grid key={blogPost.slug} item xs={12}>
                  <BlogPostMediaCard blogPost={blogPost} size="md" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box sx={sx.globalAboutSectionContainer}>
          <GlobalAboutSection variant="narrow" />
        </Box>
      </Box>
      <Box sx={sx.ctaContainer}>
        <Link href="/blog" legacyBehavior passHref>
          <SectionCta>All Posts</SectionCta>
        </Link>
      </Box>
    </Box>
  );
};

export default RelatedPostsSection;
