import SendIcon from '@mui/icons-material/Send';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';

type Props = {
  onClose: () => void;
  open: boolean;
};

const ContactDialog = ({ onClose, open }: Props): JSX.Element => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down(`sm`));
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

  useEffect(() => {
    if (!open) {
      setSuccessOpen(false);
    }
  }, [open]);

  if (open && successOpen) {
    return (
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
          <Button color="inherit" onClick={onClose} size="large" variant="text">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <form name="contact" onSubmit={handleFormSubmit}>
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
