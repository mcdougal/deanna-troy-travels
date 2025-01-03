import { Box, Container } from '@mui/material';

import { ContactForm, SectionTitle } from '@components/site';

import sx from './ContactSection.styles';

const ContactSection = (): JSX.Element => {
  return (
    <>
      <Container component="section" maxWidth="sm">
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle>Let’s Chat!</SectionTitle>
        </Box>
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactSection;
