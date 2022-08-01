import { Download } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { SectionContainer, SectionTitle } from '@components/common';
import { ContentfulImage } from '@components/contentful';
import { BlogFeature as IBlogFeature } from '@lib/contentful';

import { AssetUrls } from '../getStaticProps';

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
