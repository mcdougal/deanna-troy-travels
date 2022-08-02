import { Campaign, VideoCameraFront } from '@mui/icons-material';
import { Box } from '@mui/material';

import { SectionContainer, SectionTitle } from '@components/common';

import Service from './Service';
import sx from './ServicesSection.styles';

const ServicesSection = (): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>What Can I Do For You?</SectionTitle>
      </Box>
      <Box sx={sx.servicesContainer}>
        <Service
          description="Advertise your product or experience."
          icon={<Campaign sx={sx.advertiseIcon} />}
          label="Advertise"
          thumbnail={{
            alt: `Photo of Deanna advertising a portable Bluetooth speaker`,
            url: `/deanna-troy-travels/work-with-me/advertise.jpg`,
          }}
        />
        <Service
          description="Hire me as a guest, host or model."
          icon={<VideoCameraFront sx={sx.appearIcon} />}
          label="Appear"
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
