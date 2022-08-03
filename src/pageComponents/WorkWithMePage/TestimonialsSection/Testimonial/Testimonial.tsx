import { Box, Link as MuiLink, Typography } from '@mui/material';
import { useState } from 'react';

import sx from './Testimonial.styles';

const COLLAPSED_LENGTH = 100;

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
    <Box>
      <Typography variant="body1">
        {isCollapsed ? (
          <>“{testimonial.slice(0, COLLAPSED_LENGTH)}...</>
        ) : (
          <>“{testimonial}”</>
        )}
      </Typography>
      {isCollapsed && (
        <Box>
          <MuiLink
            onClick={(): void => {
              setIsReadMoreClicked(true);
            }}>
            Read More
          </MuiLink>
        </Box>
      )}
      <Typography color="textSecondary" variant="caption">
        {person} — {company}
      </Typography>
    </Box>
  );
};

export default Testimonial;
