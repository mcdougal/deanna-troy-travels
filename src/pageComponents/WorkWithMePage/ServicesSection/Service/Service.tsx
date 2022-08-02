import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import sx from './Service.styles';

interface Props {
  description: string;
  icon: React.ReactElement;
  label: string;
  thumbnail: {
    alt: string;
    url: string;
  };
}

const Service = ({
  description,
  icon,
  label,
  thumbnail,
}: Props): JSX.Element => {
  return (
    <Box>
      <Box sx={sx.thumbnailContainer}>
        <Image
          alt={thumbnail.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={thumbnail.url}
        />
      </Box>
      <Box sx={sx.actionContainer}>
        <Box sx={sx.actionButton}>
          <Box sx={sx.iconContainer}>{icon}</Box>
          <Typography sx={sx.labelContainer} variant="caption">
            <b>{label}</b>
          </Typography>
        </Box>
      </Box>
      <Typography sx={sx.description} variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

export default Service;
