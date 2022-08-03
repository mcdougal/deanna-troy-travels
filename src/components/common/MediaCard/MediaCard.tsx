import { Box, ButtonBase } from '@mui/material';
import Image from 'next/image';

import sx from './MediaCard.styles';
import MediaCardDetail from './MediaCardDetail';

interface Props {
  detail1: {
    icon: React.ReactElement;
    value: string;
  };
  detail2: {
    icon: React.ReactElement;
    value: string;
  };
  thumbnail: {
    alt: string;
    url: string;
  };
  url: string;
}

const MediaCard = ({
  detail1,
  detail2,
  thumbnail,
  url,
}: Props): JSX.Element => {
  return (
    <ButtonBase
      focusRipple
      href={url}
      sx={sx.mediaCardContainer}
      target="_blank">
      <Box sx={sx.thumbnailContainer}>
        <Image
          alt={thumbnail.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={thumbnail.url}
          unoptimized
        />
      </Box>
      <Box sx={sx.details}>
        <MediaCardDetail icon={detail1.icon} label={detail1.value} />
        <MediaCardDetail icon={detail2.icon} label={detail2.value} />
      </Box>
    </ButtonBase>
  );
};

export default MediaCard;
