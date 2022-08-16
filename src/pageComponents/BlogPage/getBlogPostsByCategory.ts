import { BlogPost } from './getStaticProps';

type BlogPostsByCategory = { [title: string]: Array<BlogPost> };

export default (blogPosts: Array<BlogPost>): BlogPostsByCategory => {
  const blogPostsByDestination: { [key: string]: Array<BlogPost> } = {};
  const blogPostsWithoutDestination: Array<BlogPost> = [];

  blogPosts.forEach((blogPost) => {
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

  const blogPostByCategory: BlogPostsByCategory = {};
  const otherBlogPosts: Array<BlogPost> = [];

  Object.entries(blogPostsByDestination).forEach(
    ([destinationName, destinationPosts]) => {
      if (destinationPosts.length > 3) {
        blogPostByCategory[destinationName] = destinationPosts;
      } else {
        otherBlogPosts.push(...destinationPosts);
      }
    },
  );

  otherBlogPosts.push(...blogPostsWithoutDestination);

  if (otherBlogPosts.length > 0) {
    blogPostByCategory[`And More!`] = otherBlogPosts;
  }

  return blogPostByCategory;
};
