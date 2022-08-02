import { Box } from '@mui/material';

import { SectionContainer, SectionTitle } from '@components/common';
import { BlogFeature as IBlogFeature } from '@lib/contentful';

import BlogFeature from './BlogFeature';
import sx from './BlogFeaturesSection.styles';

interface Props {
  blogFeatures: Array<IBlogFeature>;
}

const BlogFeaturesSection = ({ blogFeatures }: Props): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Blog Features</SectionTitle>
      </Box>
      <Box sx={sx.blogFeaturesContainer}>
        {blogFeatures.map((blogFeature) => {
          return (
            <BlogFeature
              key={blogFeature.blogPostTitle}
              blogFeature={blogFeature}
            />
          );
        })}
      </Box>
    </SectionContainer>
  );
};

export default BlogFeaturesSection;
