import { Button, TextField } from '@mui/material';

import sx from './BlogSubscribeForm.styles';

const BlogSubscribeForm = (): JSX.Element => {
  return (
    <form
      action="/subscribed"
      data-netlify="true"
      method="POST"
      name="subscribe">
      <input name="form-name" type="hidden" value="subscribe" />
      <TextField
        fullWidth
        id="contact-dialog-name"
        label="Your Name"
        margin="normal"
        name="name"
        required
        variant="outlined"
      />
      <TextField
        fullWidth
        id="contact-dialog-email"
        label="Your Email"
        margin="normal"
        name="email"
        required
        type="email"
        variant="outlined"
      />
      <Button
        color="secondary"
        fullWidth
        size="large"
        sx={sx.submitButton}
        type="submit"
        variant="outlined">
        Subscribe
      </Button>
    </form>
  );
};

export default BlogSubscribeForm;
