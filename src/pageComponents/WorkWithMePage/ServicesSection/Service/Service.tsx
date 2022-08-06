import { Box, ButtonBase, Typography } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './Service.styles';

interface Props {
  icon: React.ReactElement;
  label: string;
  onClick: () => void;
  thumbnail: {
    alt: string;
    url: string;
  };
}

const Service = ({ icon, label, onClick, thumbnail }: Props): JSX.Element => {
  return (
    <Box>
      <ButtonBase focusRipple onClick={onClick} sx={sx.serviceContainer}>
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
            loader={cloudinaryLoader}
            objectFit="cover"
            objectPosition="top"
            src={thumbnail.url}
          />
        </Box>
      </ButtonBase>
    </Box>
  );
};

export default Service;
