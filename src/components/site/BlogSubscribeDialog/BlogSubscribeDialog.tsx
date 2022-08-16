import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface Props {
  onClose: () => void;
  open: boolean;
}

const BlogSubscribeDialog = ({ onClose, open }: Props): JSX.Element => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down(`sm`));

  return (
    <form
      action="/subscribed"
      data-netlify="true"
      method="POST"
      name="subscribe">
      <Dialog
        disablePortal
        fullScreen={isFullScreen}
        keepMounted
        onClose={onClose}
        open={open}>
        <DialogTitle>Subscribe to Blog</DialogTitle>
        <DialogContent>
          <input name="form-name" type="hidden" value="subscribe" />
          <TextField
            autoFocus
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
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose} size="large" variant="text">
            Close
          </Button>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default BlogSubscribeDialog;
