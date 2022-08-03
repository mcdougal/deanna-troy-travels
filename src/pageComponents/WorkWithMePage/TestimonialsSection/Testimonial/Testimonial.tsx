import { Box, Link as MuiLink, Typography } from '@mui/material';
import { useState } from 'react';

import sx from './Testimonial.styles';

const COLLAPSED_LENGTH = 110;

interface Props {
  company: string;
  person: string;
  testimonial: string;
}

const Testimonial = ({ company, person, testimonial }: Props): JSX.Element => {
  const [isReadMoreClicked, setIsReadMoreClicked] = useState(false);

  const isCollapsed =
    testimonial.length > COLLAPSED_LENGTH && !isReadMoreClicked;

  return (
    <Box sx={sx.testimonialContainer}>
      <Typography
        sx={isCollapsed ? sx.testimonialContentCollapsed : null}
        variant="body1">
        {isCollapsed ? (
          <>“{testimonial.slice(0, COLLAPSED_LENGTH)}...</>
        ) : (
          <>“{testimonial}”</>
        )}
        {isCollapsed && (
          <MuiLink
            onClick={(): void => {
              setIsReadMoreClicked(true);
            }}
            sx={sx.readMoreLink}>
            Read More
          </MuiLink>
        )}
      </Typography>
      <Typography
        color="textSecondary"
        sx={sx.personAndCompany}
        variant="caption">
        {person} — {company}
      </Typography>
    </Box>
  );
};

export default Testimonial;
