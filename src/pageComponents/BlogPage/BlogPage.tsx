import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import {
  BlogSubscribeContainer,
  SiteFooter,
  SiteHeader,
} from '@components/site';

import sx from './BlogPage.styles';
import BlogPostsSection from './BlogPostsSection';
import FeaturedPost from './FeaturedPost';
import getBlogPostsByCategory from './getBlogPostsByCategory';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import SubscribeSection from './SubscribeSection';

const BlogPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const [featuredPost, ...otherPosts] = blogPosts;
  const blogPostByCategory = getBlogPostsByCategory(otherPosts);

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
        <Box sx={sx.subscribeSectionContainerTop}>
          <BlogSubscribeContainer>
            <SubscribeSection />
          </BlogSubscribeContainer>
        </Box>
        {Object.entries(blogPostByCategory).map(([title, posts]) => {
          return (
            <Box key={title} sx={sx.blogPostsSectionContainer}>
              <BlogPostsSection blogPosts={posts} title={title} />
            </Box>
          );
        })}
        <Box sx={sx.subscribeSectionContainerBottom}>
          <SubscribeSection />
        </Box>
      </Container>
      <SiteFooter />
    </>
  );
};

export default BlogPage;
