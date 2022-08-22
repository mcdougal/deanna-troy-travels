import { Box, Typography } from '@mui/material';

import { BlogSubscribeForm, SectionTitle } from '@components/site';

import sx from './SubscribeSection.styles';

const SubscribeSection = (): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Subscribe to Blog</SectionTitle>
      </Box>
      <Typography sx={sx.subtitle} variant="subtitle1">
        Get new posts delivered straight to your inbox!
      </Typography>
      <BlogSubscribeForm />
    </>
  );
};

export default SubscribeSection;
