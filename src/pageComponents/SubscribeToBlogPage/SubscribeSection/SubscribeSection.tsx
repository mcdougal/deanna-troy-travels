import { Box, Typography } from '@mui/material';

import { BlogSubscribeForm } from '@components/site';

import sx from './SubscribeSection.styles';

const SubscribeSection = (): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <Typography component="h1" variant="h2">
          <Box component="span" sx={sx.titleFirstWord}>
            Subscribe to
          </Box>
          {` `}
          Blog
        </Typography>
      </Box>
      <Typography sx={sx.subtitle} variant="subtitle1">
        Get new posts delivered straight to your inbox!
      </Typography>
      <Box sx={sx.subscribeFormContainer}>
        <BlogSubscribeForm />
      </Box>
    </>
  );
};

export default SubscribeSection;
