import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, Typography } from '@mui/material';

import sx from './Testimonial.styles';

type Props = {
  company: string;
  person: string;
  testimonial: string;
};

const Testimonial = ({ company, person, testimonial }: Props): JSX.Element => {
  return (
    <Box sx={sx.testimonialContainer}>
      <FormatQuoteIcon color="primary" sx={sx.quoteIcon} />
      <Box>
        <Typography sx={sx.testimonialContent} variant="body1">
          {testimonial}”
        </Typography>
        <Typography color="textSecondary" variant="caption">
          {person} — {company}
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;
