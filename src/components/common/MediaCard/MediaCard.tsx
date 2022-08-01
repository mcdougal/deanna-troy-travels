import { Box, ButtonBase } from '@mui/material';
import Image from 'next/image';

import sx from './MediaCard.styles';
import MediaCardAction from './MediaCardAction';

interface Props {
  action1: {
    icon: React.ReactElement;
    value: string;
  };
  action2: {
    icon: React.ReactElement;
    value: string;
  };
  action3: {
    icon: React.ReactElement;
  };
  thumbnail: {
    alt: string;
    url: string;
  };
  url: string;
}

const MediaCard = ({
  action1,
  action2,
  action3,
  thumbnail,
  url,
}: Props): JSX.Element => {
  return (
    <ButtonBase href={url} sx={sx.mediaCardContainer} target="_blank">
      <Box sx={sx.thumbnail}>
        <Image
          alt={thumbnail.alt}
          layout="fill"
          loader={({ src }): string => {
            return src;
          }}
          objectFit="cover"
          objectPosition="center"
          src={thumbnail.url}
        />
      </Box>
      <Box sx={sx.actions}>
        <Box sx={sx.actionsLeft}>
          <MediaCardAction icon={action1.icon} value={action1.value} />
          <MediaCardAction icon={action2.icon} value={action2.value} />
        </Box>
        <MediaCardAction icon={action3.icon} />
      </Box>
    </ButtonBase>
  );
};

export default MediaCard;
