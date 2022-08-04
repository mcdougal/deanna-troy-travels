import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { SiteHeader } from '@components/common';

import sx from './BlogPage.styles';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const BlogPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata blogPosts={blogPosts} />
      <SiteHeader />
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          Travel Blog
        </Typography>
        <Box sx={sx.heroImageContainer}>
          <Image
            alt="Deanna jumping on the beach while holding a bunch of colorful balloons"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            src="/deanna-troy-travels/blog/hero.jpg"
          />
        </Box>
        <Typography variant="body1">
          Welcome to the Deanna Troy Travels Blog, where I'll share all of my
          budget travel tips and tricks!
        </Typography>
      </Container>
    </>
  );
};

export default BlogPage;
