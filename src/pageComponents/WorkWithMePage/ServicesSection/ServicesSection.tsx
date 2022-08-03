import Campaign from '@mui/icons-material/Campaign';
import VideoCameraFront from '@mui/icons-material/VideoCameraFront';
import { Box } from '@mui/material';

import { SectionContainer, SectionTitle } from '@components/common';

import Service from './Service';
import sx from './ServicesSection.styles';

const ServicesSection = (): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Advertise Your...</SectionTitle>
      </Box>
      <Box sx={sx.servicesContainer}>
        <Service
          icon={<Campaign sx={sx.advertiseIcon} />}
          label="Product"
          thumbnail={{
            alt: `Photo of Deanna advertising a portable Bluetooth speaker`,
            url: `/deanna-troy-travels/work-with-me/advertise.jpg`,
          }}
        />
        <Service
          icon={<VideoCameraFront sx={sx.appearIcon} />}
          label="Experience"
          thumbnail={{
            alt: `Photo of Deanna at the Da Nang Home Cooking Class`,
            url: `/deanna-troy-travels/work-with-me/appear.jpg`,
          }}
        />
      </Box>
    </SectionContainer>
  );
};

export default ServicesSection;
