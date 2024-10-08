import PlaceIcon from '@mui/icons-material/Place';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Grid } from '@mui/material';

import { MediaCard } from '@components/generic';
import { SectionTitle } from '@components/site';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost, Destination } from '../getStaticProps';

import sx from './BlogPostsSection.styles';

interface Props {
  blogPosts: Array<BlogPost>;
  destination: Destination;
}

const BlogPostsSection = ({ blogPosts, destination }: Props): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Blog Posts 📰</SectionTitle>
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
                    value: new Date(
                      blogPost.publishedDate,
                    ).toLocaleDateString(),
                  },
                  {
                    key: `destination`,
                    icon: <PlaceIcon sx={sx.blogPostDestinationIcon} />,
                    value: destination.name,
                  },
                ]}
                thumbnail={getBlogPostThumbnail(blogPost)}
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
