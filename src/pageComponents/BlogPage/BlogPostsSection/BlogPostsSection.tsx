import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';
import { Box } from '@mui/material';

import { MediaCard, SectionTitle } from '@components/common';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostsSection.styles';

interface Props {
  blogPosts: Array<BlogPost>;
}

const BlogPostsSection = ({ blogPosts }: Props): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Recent Posts</SectionTitle>
      </Box>
      <Box sx={sx.blogPosts}>
        {blogPosts.map((blogPost) => {
          return (
            <Box key={blogPost.slug}>
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
      </Box>
    </>
  );
};

export default BlogPostsSection;
