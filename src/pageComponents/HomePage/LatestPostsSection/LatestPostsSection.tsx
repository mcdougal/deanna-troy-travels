import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';

import { MediaCard, SectionTitle } from '@components/common';

import { RecentBlogPost } from '../getStaticProps';

import sx from './LatestPostsSection.styles';

interface Props {
  recentBlogPosts: Array<RecentBlogPost>;
}

const LatestPostsSection = ({ recentBlogPosts }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Latest Posts</SectionTitle>
      </Box>
      {recentBlogPosts.map((blogPost) => {
        return (
          <Box key={blogPost.slug} sx={sx.blogPost}>
            <MediaCard
              details={[
                {
                  key: `date`,
                  icon: <TodayIcon sx={sx.blogPostDateIcon} />,
                  value: new Date(blogPost.date).toLocaleDateString(),
                },
                {
                  key: `location`,
                  icon: <PlaceIcon sx={sx.blogPostLocationIcon} />,
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
