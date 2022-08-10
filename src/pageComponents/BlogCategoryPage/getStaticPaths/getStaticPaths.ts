import type { GetStaticPaths } from 'next';

import fetchBlogCategories from './fetchBlogCategories';

const getStaticPaths: GetStaticPaths = async () => {
  const blogCategories = await fetchBlogCategories();

  const blogCategoriesWithPosts = blogCategories.filter((blogCategory) => {
    return blogCategory.linkedFrom.blogPostCollection.items.length > 0;
  });

  const paths = blogCategoriesWithPosts.map((blogCategory) => {
    return {
      params: {
        slug: blogCategory.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;
