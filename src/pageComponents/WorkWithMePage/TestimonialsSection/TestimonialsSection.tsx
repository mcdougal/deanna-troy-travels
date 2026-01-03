import { Box, Container } from '@mui/material';

import { SectionTitle } from '@components/site';
import { Miscellaneous } from '@lib/miscellaneous';

import { Testimonial } from '../getStaticProps';

import TestimonialQuote from './TestimonialQuote';
import sx from './TestimonialsSection.styles';

type Props = {
  miscellaneous: Miscellaneous;
  testimonials: Array<Testimonial>;
};

const TestimonialsSection = ({
  miscellaneous,
  testimonials,
}: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>
          {miscellaneous.workWithMeTestimonialsTitle.text}
        </SectionTitle>
      </Box>
      <Box sx={sx.testimonialsContainer}>
        {testimonials.map((testimonial) => {
          return (
            <TestimonialQuote
              key={`${testimonial.company}-${testimonial.person}`}
              company={testimonial.company}
              person={testimonial.person}
              testimonial={testimonial.testimonial}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
