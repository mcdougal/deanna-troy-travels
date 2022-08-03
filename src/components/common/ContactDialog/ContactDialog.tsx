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

const ContactDialog = ({ onClose, open }: Props): JSX.Element => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down(`sm`));

  return (
    <form action="/success" data-netlify="true" method="POST" name="contact">
      <Dialog
        disablePortal
        fullScreen={isFullScreen}
        keepMounted
        onClose={onClose}
        open={open}>
        <DialogTitle>Get In Touch</DialogTitle>
        <DialogContent>
          <input name="form-name" type="hidden" value="contact" />
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
          <TextField
            fullWidth
            id="contact-dialog-message"
            label="Message"
            margin="normal"
            maxRows={20}
            multiline
            name="message"
            required
            rows={8}
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
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default ContactDialog;
