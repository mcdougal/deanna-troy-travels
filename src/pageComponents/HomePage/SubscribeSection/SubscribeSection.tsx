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
          <SectionTitle>Your Next Adventure Awaits!</SectionTitle>
        </Box>
        <Box sx={sx.formContainer}>
          <Typography align="center" sx={sx.subtitle} variant="subtitle1">
            Let’s explore together — subscribe for travel tips, hidden gems and
            inspiring stories to fuel your next adventure!
          </Typography>
          <BlogSubscribeForm />
        </Box>
      </BlogSubscribeContainer>
    </Container>
  );
};

export default SubscribeSection;
