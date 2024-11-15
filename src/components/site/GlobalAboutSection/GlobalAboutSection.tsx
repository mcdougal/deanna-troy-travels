import CheckroomIcon from '@mui/icons-material/Checkroom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';
import { cloudinaryLoader } from '@lib/cloudinary';

import SectionTitle from '../SectionTitle';

import sx from './GlobalAboutSection.styles';

const GlobalAboutSection = (): JSX.Element => {
  const theme = useTheme();

  const socials = [
    {
      icon: <YouTubeIcon />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <CheckroomIcon />,
      label: `The Thrift Den`,
      url: `https://www.facebook.com/thethriftden`,
    },
    {
      icon: <PoshmarkIcon />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <TikTokIcon />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
  ];

  return (
    <Box sx={sx.container}>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna sitting on a beach doing yoga"
          layout="fill"
          loader={cloudinaryLoader}
          objectFit="cover"
          objectPosition="center"
          priority
          sizes={[
            `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
            `900px`,
          ].join(`,`)}
          src="/upload/deanna-troy-travels/global-about-photo.jpg"
        />
      </Box>
      <Box sx={sx.textContainer}>
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle>Hi, I’m Deanna</SectionTitle>
        </Box>
        <Typography paragraph variant="body1">
          Welcome to Deanna Troy Travels, your go-to guide for vegan and budget
          travel adventures! Since 2016, my husband Cedric and I have been
          exploring the world. From Thailand’s bustling streets to Japan’s
          serene temples, we’ve discovered hidden gems, local life and
          unforgettable cultures — and now, we’re sharing them with you!
        </Typography>
        <Typography paragraph variant="body1">
          Join me for travel tips, insider stories, and a quirky perspective on
          exploring the world while keeping it budget-friendly and
          plant-powered. Let’s inspire each other to see more, spend less and
          experience the joy of travel! 🌍
        </Typography>
        <Stack direction="row" sx={sx.socialsContainer}>
          {socials.map(({ icon, label, url }) => {
            return (
              <Tooltip key={label} title={label}>
                <IconButton component="a" href={url} target="_blank">
                  {icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default GlobalAboutSection;
