import { Download } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { SectionContainer, SectionTitle } from '@components/common';
import { ContentfulImage } from '@components/contentful';

import { AssetUrls } from '../getStaticProps';

import sx from './BlogFeaturesSection.styles';

interface Props {}

const BlogFeaturesSection = ({}: Props): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Blog Features</SectionTitle>
      </Box>
    </SectionContainer>
  );
};

export default BlogFeaturesSection;
