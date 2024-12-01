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

import sx from './BlogSubscribeForm.styles';

const BlogSubscribeForm = (): JSX.Element => {
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
      <form name="subscribe" onSubmit={handleFormSubmit}>
        <input name="form-name" type="hidden" value="subscribe" />
        <TextField
          fullWidth
          id="subscribe-form-name"
          label="Your Name"
          margin="normal"
          name="name"
          required
          variant="outlined"
        />
        <TextField
          fullWidth
          id="subscribe-form-email"
          label="Your Email"
          margin="normal"
          name="email"
          required
          type="email"
          variant="outlined"
        />
        <Button
          color="inherit"
          fullWidth
          size="large"
          sx={sx.submitButton}
          type="submit"
          variant="outlined">
          Subscribe
        </Button>
      </form>
      <Dialog
        onClose={(): void => {
          return setSuccessOpen(false);
        }}
        open={successOpen}>
        <DialogTitle>You’re Subscribed!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Keep an eye on your inbox for new posts from the Deanna Troy Travels
            blog!
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

export default BlogSubscribeForm;
