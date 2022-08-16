import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SellIcon from '@mui/icons-material/Sell';
import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';

import { ContactDialog, SectionTitle } from '@components/site';

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
        <Grid alignItems="stretch" container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Service
              icon={<SellIcon sx={sx.advertiseIcon} />}
              label="Product"
              onClick={openContactDialog}
              thumbnail={{
                alt: `Photo of Deanna advertising a portable Bluetooth speaker`,
                url: `/upload/deanna-troy-travels/work-with-me/advertise.jpg`,
              }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Service
              icon={<LocalActivityIcon sx={sx.appearIcon} />}
              label="Experience"
              onClick={openContactDialog}
              thumbnail={{
                alt: `Photo of Deanna at the Da Nang Home Cooking Class`,
                url: `/upload/deanna-troy-travels/work-with-me/appear.jpg`,
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <ContactDialog onClose={closeContactDialog} open={isContactDialogOpen} />
    </>
  );
};

export default ServicesSection;
