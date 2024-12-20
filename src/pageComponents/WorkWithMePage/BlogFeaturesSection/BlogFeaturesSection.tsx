import { Box, Container, Grid } from '@mui/material';

import { SectionTitle } from '@components/site';

import { BlogFeature as IBlogFeature } from '../getStaticProps';

import BlogFeature from './BlogFeature';
import sx from './BlogFeaturesSection.styles';

type Props = {
  blogFeatures: Array<IBlogFeature>;
};

const BlogFeaturesSection = ({ blogFeatures }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Blog Features</SectionTitle>
      </Box>
      <Grid alignItems="stretch" container spacing={4}>
        {blogFeatures.map((blogFeature) => {
          return (
            <Grid key={blogFeature.blogPostTitle} item sm={6} xs={12}>
              <BlogFeature blogFeature={blogFeature} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default BlogFeaturesSection;
