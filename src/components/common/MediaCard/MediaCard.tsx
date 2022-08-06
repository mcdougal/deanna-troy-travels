import { Box, ButtonBase, Typography } from '@mui/material';
import Image from 'next/image';

import sx from './MediaCard.styles';
import MediaCardDetail from './MediaCardDetail';

interface Props {
  alignDetails?: `left` | `right`;
  description?: string;
  details: Array<{
    key: string;
    icon: React.ReactElement;
    value: string;
  }>;
  thumbnail: {
    alt: string;
    url: string;
  };
  title?: string;
  url: string;
}

const MediaCard = ({
  alignDetails = `left`,
  details,
  thumbnail,
  title,
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
      {title && (
        <Typography sx={sx.title} variant="body1">
          {title}
        </Typography>
      )}
      <Box sx={[sx.details, alignDetails === `right` && sx.alignRight]}>
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
