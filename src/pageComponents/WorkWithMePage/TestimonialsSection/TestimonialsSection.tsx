import { Box, Container } from '@mui/material';

import { SectionTitle } from '@components/common';

import Testimonial from './Testimonial';
import sx from './TestimonialsSection.styles';

const TestimonialsSection = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>What People Say</SectionTitle>
      </Box>
      <Box sx={sx.testimonialsContainer}>
        <Testimonial
          company="Our Awesome Planet"
          person="Anton Diaz"
          testimonial="It's awesome to watch and learn from Deanna's travel vlog feature of her travel experiences in South East Asia, Japan and the US in her vlog Deanna Troy Travels. I met her personally during the Travel Blogging Conference (TBEX) 2018 at NY Finger Lakes and I learned a thing or two on how to shoot a vlog feature. She's one of the travel channels I follow in YT to get fresh perspectives on the destinations and vlogging."
        />
        <Testimonial
          company="GoAsiaDayTrip"
          person="Ms. Greta"
          testimonial="The cooking class video Deanna made was beyond my expectation! It continues to be truly helpful to not only my company but also to people planning to visit Vietnam. Deanna is a passionate traveler, an amazing vlogger, and a faithful partner to work with."
        />
        <Testimonial
          company="My Debstinations"
          person="Debbi Shibuya"
          testimonial="I love how genuine Deanna is - I cannot even imagine how much hard work it has been to be consistent with her videos, but her passion and love for it always shines through."
        />
        <Testimonial
          company="Japan Festival Boston"
          person="Julian Kan"
          testimonial="I had the honor to work with Deanna Troy since 2019, who is a sensational YouTuber educating people of cultures, food, and travel destinations focused on Asia. She is someone who has the highest level of responsibility and professionalism. She delivers her work we requested before deadlines and she constantly spreads the tremendous positivity through her energetic personality and her work. I definitely recommend Deanna 1000%!!!"
        />
        <Testimonial
          company="EpicTravelShow"
          person="Jonny Hamburg"
          testimonial="Deanna has been a wonderful guest on my show called “Epic Travel Show”. In her first episode Deanna provided thorough information in an engaging and understandable way about living in Da Nang, Vietnam. Due to the popularity of her episode on ETS, I invited her back for another episode, this time to discuss travel information about Tokyo. I have no doubt that Deanna will again entertain while also providing invaluable inside insight which will greatly help my viewers plan their trips to Tokyo. I would hire Deanna in a heart beat for any travel-related job position as she is a passionate and educated traveler."
        />
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
