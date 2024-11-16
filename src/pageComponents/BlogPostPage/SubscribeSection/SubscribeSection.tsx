import { Box, Typography } from '@mui/material';

import { BlogSubscribeForm, SectionTitle } from '@components/site';

import sx from './SubscribeSection.styles';

const SubscribeSection = (): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Your Next Adventure Awaits!</SectionTitle>
      </Box>
      <Typography align="center" sx={sx.subtitle} variant="subtitle1">
        Let’s explore together — subscribe for travel tips, hidden gems and
        inspiring stories to fuel your next adventure!
      </Typography>
      <BlogSubscribeForm />
    </>
  );
};

export default SubscribeSection;
