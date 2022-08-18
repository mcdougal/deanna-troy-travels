import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import sx from './ShareButtons.styles';

const ShareButtons = (): JSX.Element => {
  const router = useRouter();

  const urlToShare = `https://www.deannatroytravels.com${router.asPath}`;
  const encodedUrlToShare = encodeURIComponent(urlToShare);

  const facebookShareUrl = [
    `https://www.facebook.com/dialog/share`,
    `?app_id=611116800614600`,
    `&display=popup`,
    `&href=${encodedUrlToShare}`,
    `&redirect_uri=${encodedUrlToShare}`,
  ];

  const twitterShareUrl = [
    `https://twitter.com/intent/tweet`,
    `?text=${encodeURIComponent(`Check out this blog post`)}`,
    `&url=${encodedUrlToShare}`,
  ];

  const buttons = [
    {
      key: `facebook`,
      href: facebookShareUrl.join(``),
      icon: <FacebookIcon />,
    },
    {
      key: `twitter`,
      href: twitterShareUrl.join(``),
      icon: <TwitterIcon />,
    },
  ];

  return (
    <Box sx={sx.shareButtonsContainer}>
      <Typography sx={sx.shareLabel} variant="body2">
        Share:
      </Typography>
      {buttons.map(({ key, href, icon }) => {
        return (
          <IconButton
            key={key}
            color="primary"
            component="a"
            href={href}
            sx={sx.shareButton}
            target="_blank">
            {icon}
          </IconButton>
        );
      })}
    </Box>
  );
};

export default ShareButtons;
