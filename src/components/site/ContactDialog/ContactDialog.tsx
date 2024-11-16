import SendIcon from '@mui/icons-material/Send';
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

type Props = {
  onClose: () => void;
  open: boolean;
};

const ContactDialog = ({ onClose, open }: Props): JSX.Element => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down(`sm`));

  return (
    <form action="/success" data-netlify="true" method="POST" name="contact">
      <Dialog
        disablePortal
        fullScreen={isFullScreen}
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
            minRows={8}
            multiline
            name="message"
            required
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={onClose} size="large" variant="text">
            Cancel
          </Button>
          <Button
            color="primary"
            size="large"
            startIcon={<SendIcon />}
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
