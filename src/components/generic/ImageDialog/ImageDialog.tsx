import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image, { ImageLoader } from 'next/legacy/image';

import sx from './ImageDialog.styles';

interface Props {
  image: {
    alt: string | null;
    loader: ImageLoader;
    url: string;
  };
  onClose: () => void;
  open: boolean;
}

const ImageDialog = ({ image, onClose, open }: Props): JSX.Element => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down(`sm`));

  return (
    <Dialog
      fullScreen={isFullScreen}
      fullWidth
      maxWidth="xl"
      onClose={onClose}
      open={open}
      sx={sx.dialog}>
      <Box sx={sx.imageContainer}>
        <Image
          alt={image.alt || undefined}
          layout="fill"
          loader={image.loader}
          objectFit="contain"
          src={image.url}
        />
      </Box>
      <IconButton
        aria-label="Close Dialog"
        color="inherit"
        onClick={onClose}
        size="large"
        sx={sx.closeButton}>
        <CloseIcon sx={sx.closeIcon} />
      </IconButton>
    </Dialog>
  );
};

export default ImageDialog;
