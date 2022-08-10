import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Button, Container, Grid } from '@mui/material';
import Link from 'next/link';

import { MediaCard } from '@components/generic';
import { SectionTitle } from '@components/site';
import { contentfulLoader } from '@lib/contentful';

import { BlogPost } from '../getStaticProps';

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
                  loader: contentfulLoader,
                  url: blogPost.coverImage.url,
                }}
                title={blogPost.title}
                url={`/post/${blogPost.slug}`}
              />
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
