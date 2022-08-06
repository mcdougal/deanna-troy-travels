import CampaignIcon from '@mui/icons-material/Campaign';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { Box, Container } from '@mui/material';
import { useState } from 'react';

import { ContactDialog, SectionTitle } from '@components/common';

import Service from './Service';
import sx from './ServicesSection.styles';

const ServicesSection = (): JSX.Element => {
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
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle>Advertise Your...</SectionTitle>
        </Box>
        <Box sx={sx.servicesContainer}>
          <Service
            icon={<CampaignIcon sx={sx.advertiseIcon} />}
            label="Product"
            onClick={openContactDialog}
            thumbnail={{
              alt: `Photo of Deanna advertising a portable Bluetooth speaker`,
              url: `/deanna-troy-travels/work-with-me/advertise.jpg`,
            }}
          />
          <Service
            icon={<VideoCameraFrontIcon sx={sx.appearIcon} />}
            label="Experience"
            onClick={openContactDialog}
            thumbnail={{
              alt: `Photo of Deanna at the Da Nang Home Cooking Class`,
              url: `/deanna-troy-travels/work-with-me/appear.jpg`,
            }}
          />
        </Box>
      </Container>
      <ContactDialog onClose={closeContactDialog} open={isContactDialogOpen} />
    </>
  );
};

export default ServicesSection;
