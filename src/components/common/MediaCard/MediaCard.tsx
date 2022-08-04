import { Box, ButtonBase } from '@mui/material';
import Image from 'next/image';

import sx from './MediaCard.styles';
import MediaCardDetail from './MediaCardDetail';

interface Props {
  details: Array<{
    key: string;
    icon: React.ReactElement;
    value: string;
  }>;
  thumbnail: {
    alt: string;
    url: string;
  };
  url: string;
}

const MediaCard = ({ details, thumbnail, url }: Props): JSX.Element => {
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
        {details.map((detail) => {
          return (
            <MediaCardDetail
              key={detail.key}
              icon={detail.icon}
              value={detail.value}
            />
          );
        })}
      </Box>
    </ButtonBase>
  );
};

export default MediaCard;
