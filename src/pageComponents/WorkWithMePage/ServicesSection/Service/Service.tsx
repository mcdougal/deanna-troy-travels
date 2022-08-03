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
    <Box sx={sx.serviceContainer}>
      <Box sx={sx.titleContainer}>
        <Box sx={sx.iconContainer}>{icon}</Box>
        <Typography sx={sx.title} variant="h6">
          <b>{label}</b>
        </Typography>
      </Box>
      <Box sx={sx.thumbnailContainer}>
        <Image
          alt={thumbnail.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={thumbnail.url}
        />
      </Box>
      <Typography sx={sx.description} variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

export default Service;
