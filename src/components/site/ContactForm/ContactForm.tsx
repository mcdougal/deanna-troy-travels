import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';

import sx from './ContactForm.styles';

const ContactForm = (): JSX.Element => {
  const [successOpen, setSuccessOpen] = useState(false);

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    await fetch(`/__forms.html`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: new URLSearchParams(formData as any).toString(),
    });
    target.reset();
    setSuccessOpen(true);
  };

  // Keep form in sync with `public/__forms.html`
  // See: https://opennext.js.org/netlify/forms
  return (
    <>
      <form name="contact" onSubmit={handleFormSubmit}>
        <input name="form-name" type="hidden" value="contact" />
        <TextField
          fullWidth
          id="contact-form-name"
          label="Your Name"
          name="name"
          required
          variant="outlined"
        />
        <TextField
          fullWidth
          id="contact-form-email"
          label="Your Email"
          margin="normal"
          name="email"
          required
          type="email"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="contact-form-message"
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
          fullWidth
          size="large"
          sx={sx.submitButton}
          type="submit"
          variant="contained">
          Send
        </Button>
      </form>
      <Dialog
        onClose={(): void => {
          return setSuccessOpen(false);
        }}
        open={successOpen}>
        <DialogTitle>Message Sent!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I’ll reply to your message shortly. Keep an eye on your inbox!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            onClick={(): void => {
              setSuccessOpen(false);
            }}
            size="large"
            variant="text">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactForm;
