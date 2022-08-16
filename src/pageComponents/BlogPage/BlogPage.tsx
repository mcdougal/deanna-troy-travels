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

  const blogPostCategories: { [key: string]: Array<BlogPost> } = {};
  const otherBlogPosts: Array<BlogPost> = [];

  Object.entries(blogPostsByDestination).forEach(
    ([destinationName, destinationPosts]) => {
      if (destinationPosts.length > 3) {
        blogPostCategories[destinationName] = destinationPosts;
      } else {
        otherBlogPosts.push(...destinationPosts);
      }
    },
  );

  otherBlogPosts.push(...blogPostsWithoutDestination);

  if (otherBlogPosts.length > 0) {
    blogPostCategories[`And More!`] = otherBlogPosts;
  }

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
        {Object.entries(blogPostCategories).map(([title, posts]) => {
          return (
            <Box key={title} sx={sx.blogPostsSectionContainer}>
              <BlogPostsSection blogPosts={posts} title={title} />
            </Box>
          );
        })}
        <Box sx={sx.subscribeSectionContainer}>
          <SubscribeSection />
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
