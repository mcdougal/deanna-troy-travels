import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Grid } from '@mui/material';

import { MediaCard, SectionTitle } from '@components/common';
import { contentfulLoader } from '@lib/contentful';

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
      <Grid alignItems="stretch" container spacing={3}>
        {blogPosts.map((blogPost) => {
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
    </>
  );
};

export default BlogPostsSection;
