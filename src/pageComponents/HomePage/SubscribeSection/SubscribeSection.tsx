import { Box, Container, Typography } from '@mui/material';

import {
  BlogSubscribeContainer,
  BlogSubscribeForm,
  SectionTitle,
} from '@components/site';

import sx from './SubscribeSection.styles';

const SubscribeSection = (): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <BlogSubscribeContainer>
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle>Subscribe to Blog</SectionTitle>
        </Box>
        <Typography sx={sx.subtitle} variant="subtitle1">
          Get new posts delivered straight to your inbox!
        </Typography>
        <BlogSubscribeForm />
      </BlogSubscribeContainer>
    </Container>
  );
};

export default SubscribeSection;
