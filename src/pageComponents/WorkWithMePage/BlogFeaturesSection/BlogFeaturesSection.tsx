import { Box, Container } from '@mui/material';

import { SectionTitle } from '@components/common';

import { BlogFeature as IBlogFeature } from '../getStaticProps';

import BlogFeature from './BlogFeature';
import sx from './BlogFeaturesSection.styles';

interface Props {
  blogFeatures: Array<IBlogFeature>;
}

const BlogFeaturesSection = ({ blogFeatures }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Blog Features</SectionTitle>
      </Box>
      <Box>
        {blogFeatures.map((blogFeature) => {
          return (
            <Box key={blogFeature.blogPostTitle} sx={sx.blogFeatureContainer}>
              <BlogFeature blogFeature={blogFeature} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default BlogFeaturesSection;
