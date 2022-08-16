import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/site';

import sx from './BlogPage.styles';
import BlogPostsSection from './BlogPostsSection';
import FeaturedPost from './FeaturedPost';
import getStaticProps, { BlogPost } from './getStaticProps';
import PageMetadata from './PageMetadata';
import SubscribeSection from './SubscribeSection';

const BlogPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const [featuredPost, ...otherPosts] = blogPosts;

  const blogPostsByDestination: { [key: string]: Array<BlogPost> } = {};
  const blogPostsWithoutDestination: Array<BlogPost> = [];

  otherPosts.forEach((blogPost) => {
    const { destination } = blogPost;

    if (!destination) {
      blogPostsWithoutDestination.push(blogPost);
    } else {
      if (!blogPostsByDestination[destination.name]) {
        blogPostsByDestination[destination.name] = [];
      }

      blogPostsByDestination[destination.name].push(blogPost);
    }
  });

  return (
    <>
      <PageMetadata blogPosts={blogPosts} />
      <SiteHeader />
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          <Box component="span" sx={sx.titlePrimary}>
            Travel
          </Box>
          {` `}
          Blog
        </Typography>
        <Box sx={sx.featuredPostContainer}>
          <FeaturedPost blogPost={featuredPost} />
        </Box>
        {Object.entries(blogPostsByDestination).map(
          ([destinationName, destinationPosts]) => {
            return (
              <Box key={destinationName} sx={sx.blogPostsSectionContainer}>
                <BlogPostsSection
                  blogPosts={destinationPosts}
                  title={destinationName}
                />
              </Box>
            );
          },
        )}
        <Box sx={sx.subscribeSectionContainer}>
          <SubscribeSection />
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
