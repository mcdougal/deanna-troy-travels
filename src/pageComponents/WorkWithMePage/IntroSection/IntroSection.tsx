import { Box, Button, Container } from '@mui/material';
import { useState } from 'react';

import { EmbeddedYouTubeVideo } from '@components/embed';
import { ContactDialog } from '@components/site';
import { Miscellaneous } from '@lib/miscellaneous';

import sx from './IntroSection.styles';

type Props = {
  miscellaneous: Miscellaneous;
};

const IntroSection = ({ miscellaneous }: Props): JSX.Element => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const openContactDialog = (): void => {
    setIsContactDialogOpen(true);
  };

  const closeContactDialog = (): void => {
    setIsContactDialogOpen(false);
  };

  return (
    <>
      <Container component="section" maxWidth="md">
        <Box sx={sx.videoRow}>
          <Box sx={sx.videoContainer}>
            <EmbeddedYouTubeVideo
              videoId={miscellaneous.workWithMeVideo.videoId}
            />
          </Box>
        </Box>
        <Box sx={sx.buttonsSection}>
          <Box sx={sx.buttonsContainer}>
            <Button
              color="primary"
              onClick={openContactDialog}
              size="large"
              sx={sx.ctaButton}
              variant="contained">
              {miscellaneous.workWithMeContactMeButton.label}
            </Button>
            <Button
              color="primary"
              href={miscellaneous.resumeButton.url}
              size="large"
              sx={sx.ctaButton}
              target="_blank"
              variant="outlined">
              {miscellaneous.resumeButton.label}
            </Button>
            <Button
              color="primary"
              href={miscellaneous.workWithMeMediaRatesButton.url}
              size="large"
              sx={sx.ctaButton}
              target="_blank"
              variant="outlined">
              {miscellaneous.workWithMeMediaRatesButton.label}
            </Button>
          </Box>
        </Box>
      </Container>
      <ContactDialog onClose={closeContactDialog} open={isContactDialogOpen} />
    </>
  );
};

export default IntroSection;
