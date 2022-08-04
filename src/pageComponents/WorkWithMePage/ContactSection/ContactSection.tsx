import { Box, Button, Container, TextField } from '@mui/material';

import { SectionTitle } from '@components/common';

import sx from './ContactSection.styles';

const ContactSection = (): JSX.Element => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle>Let’s Chat!</SectionTitle>
        </Box>
        <form
          action="/success"
          data-netlify="true"
          method="POST"
          name="contact">
          <input name="form-name" type="hidden" value="contact" />
          <TextField
            fullWidth
            id="contact-section-name"
            label="Your Name"
            name="name"
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            id="contact-section-email"
            label="Your Email"
            margin="normal"
            name="email"
            required
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="contact-section-message"
            label="Message"
            margin="normal"
            maxRows={20}
            minRows={8}
            multiline
            name="message"
            required
            variant="outlined"
          />
          <Button
            color="primary"
            size="large"
            sx={sx.submitButton}
            type="submit"
            variant="contained">
            Send
          </Button>
        </form>
      </Container>
    </>
  );
};

export default ContactSection;
