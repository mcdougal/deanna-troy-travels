import { Box, ButtonBase, SxProps, Theme, Typography } from '@mui/material';
import Image, { ImageLoader } from 'next/legacy/image';
import Link from 'next/link';

import sx from './MediaCard.styles';
import MediaCardDetail from './MediaCardDetail';

interface Props {
  alignDetails?: `left` | `right`;
  description?: string;
  details?: Array<{
    key: string;
    icon: React.ReactElement;
    value: string;
  }>;
  size?: `sm` | `md` | `lg`;
  thumbnail: {
    alt: string;
    loader: ImageLoader;
    url: string;
  };
  title: string;
  url: string;
}

const MediaCard = ({
  alignDetails = `left`,
  description,
  details = [],
  size = `sm`,
  thumbnail,
  title,
  url,
}: Props): JSX.Element => {
  const titleSxOptions: {
    [key in typeof size]: SxProps<Theme>;
  } = {
    sm: sx.titleSm,
    md: sx.titleMd,
    lg: sx.titleLg,
  };
  const titleSx = titleSxOptions[size];

  const cardContent = (
    <>
      <Box sx={sx.thumbnailContainer}>
        <Image
          alt={thumbnail.alt}
          layout="fill"
          loader={thumbnail.loader}
          objectFit="cover"
          objectPosition="center"
          sizes="300px"
          src={thumbnail.url}
        />
      </Box>
      <Typography
        component="p"
        sx={[sx.title, ...(Array.isArray(titleSx) ? titleSx : [titleSx])]}
        variant="h6">
        {title}
      </Typography>
      {details.length > 0 && (
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
      )}
      {description && (
        <Typography component="p" sx={sx.description} variant="body1">
          {description}
        </Typography>
      )}
    </>
  );

  const buttonBaseProps = {
    focusRipple: true,
    sx: sx.mediaCardButtonBase,
  };

  if (url.startsWith(`/`)) {
    return (
      <Link href={url} legacyBehavior passHref>
        <ButtonBase {...buttonBaseProps} component="a">
          {cardContent}
        </ButtonBase>
      </Link>
    );
  }

  return (
    <ButtonBase {...buttonBaseProps} href={url} target="_blank">
      {cardContent}
    </ButtonBase>
  );
};

export default MediaCard;
