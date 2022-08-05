import ArrowForward from '@mui/icons-material/ArrowForward';
import Place from '@mui/icons-material/Place';
import Today from '@mui/icons-material/Today';
import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';

import { MediaCard, SectionTitle } from '@components/common';

import { RecentBlogPost } from '../getStaticProps';

import sx from './FeaturedPostsSection.styles';

interface Props {
  recentBlogPosts: Array<RecentBlogPost>;
}

const FeaturedPostsSection = ({ recentBlogPosts }: Props): JSX.Element => {
  return (
    <Container maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Featured Posts</SectionTitle>
      </Box>
      {recentBlogPosts.map((blogPost) => {
        return (
          <Box key={blogPost.slug} sx={sx.blogPost}>
            <MediaCard
              details={[
                {
                  key: `date`,
                  icon: <Today sx={sx.blogPostDateIcon} />,
                  value: new Date(blogPost.date).toLocaleDateString(),
                },
                {
                  key: `location`,
                  icon: <Place sx={sx.blogPostLocationIcon} />,
                  value: blogPost.location,
                },
              ]}
              thumbnail={{
                alt:
                  blogPost.coverImage.description ||
                  `${blogPost.title} thumbnail`,
                url: blogPost.coverImage.url,
              }}
              title={blogPost.title}
              url={`/post/${blogPost.slug}`}
            />
          </Box>
        );
      })}
      <Box sx={sx.ctaContainer}>
        <Link href="/blog" passHref>
          <Button
            color="primary"
            endIcon={<ArrowForward fontSize="small" />}
            size="large"
            variant="contained">
            All Posts
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default FeaturedPostsSection;
