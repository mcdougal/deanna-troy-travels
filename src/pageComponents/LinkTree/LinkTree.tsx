import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  Box,
  Button,
  GlobalStyles,
  IconButton,
  Typography,
} from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { MediaCard } from '@components/generic';
import {
  AmazonIcon,
  DepopIcon,
  MercariIcon,
  PoshmarkIcon,
  TikTokIcon,
} from '@components/icons';
import { SiteFooter } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStaticProps from './getStaticProps';
import sx from './LinkTree.styles';
import LogoAndTitle from './LogoAndTitle';
import PageMetadata from './PageMetadata';

const LinkTree = ({
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const socials = [
    {
      icon: <YouTubeIcon />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <TikTokIcon />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
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
  ];

  const links = [
    {
      label: `My Website`,
      iconSrc: `/upload/deanna-troy-travels/link-tree/beach-yoga.png`,
      url: `https://www.deannatroytravels.com/`,
    },
    {
      label: `Blog`,
      iconSrc: `/upload/deanna-troy-travels/link-tree/las-vegas.png`,
      url: `https://www.deannatroytravels.com/blog`,
    },
    {
      label: `The Thrift Den`,
      iconSrc: `/upload/deanna-troy-travels/link-tree/thrift-den.png`,
      url: `https://www.instagram.com/thethriftdenct`,
    },
    {
      label: `Book 1:1 Call`,
      iconSrc: `/upload/deanna-troy-travels/link-tree/travel-consulting.png`,
      url: `https://egyd.one/deannatroytravels/`,
    },
  ];

  const shops = [
    {
      icon: <AmazonIcon />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <DepopIcon />,
      label: `Depop`,
      url: `https://www.depop.com/deannatroyshop/`,
    },
    {
      icon: <MercariIcon />,
      label: `Mercari`,
      url: `https://www.mercari.com/u/141412516/`,
    },
  ];

  return (
    <>
      <PageMetadata />
      <GlobalStyles styles={{ body: { background: `#f7f7f7` } }} />
      <Box sx={sx.header}>
        <Box>
          <LogoAndTitle />
        </Box>
        <Box sx={sx.socials}>
          {socials.map(({ icon, label, url }) => {
            return (
              <IconButton
                key={label}
                component="a"
                href={url}
                target="_blank"
                title={label}>
                {icon}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Box sx={sx.links}>
        {links.map(({ label, iconSrc, url }) => {
          return (
            <Button
              key={label}
              color="inherit"
              component="a"
              focusRipple
              href={url}
              size="large"
              startIcon={
                <Box sx={sx.linkIconImageContainer}>
                  <Image
                    alt=""
                    height={48}
                    layout="fixed"
                    loader={cloudinaryLoader}
                    src={iconSrc}
                    width={48}
                  />
                </Box>
              }
              sx={sx.link}
              target="_blank"
              variant="contained">
              <Typography component="span" sx={sx.linkLabel} variant="h5">
                {label}
              </Typography>
            </Button>
          );
        })}
      </Box>
      <Box sx={sx.shops}>
        {shops.map(({ icon, label, url }) => {
          return (
            <IconButton
              key={label}
              component="a"
              href={url}
              target="_blank"
              title={label}>
              {icon}
            </IconButton>
          );
        })}
      </Box>
      {videos.length > 0 && (
        <Box pt={4} sx={sx.mostRecentVideoSection}>
          <Box mb={2}>
            <Typography align="center" variant="h5">
              Lively Las Vegas
            </Typography>
          </Box>
          {videos.map((video) => {
            return (
              <Box key={video.videoId} px={1} sx={sx.mostRecentVideoContainer}>
                <MediaCard
                  details={[
                    {
                      key: `views`,
                      icon: <VisibilityIcon sx={sx.viewsIcon} />,
                      value: video.viewCount.toLocaleString(),
                    },
                    {
                      key: `likes`,
                      icon: <ThumbUpIcon sx={sx.likesIcon} />,
                      value: video.likeCount.toLocaleString(),
                    },
                    {
                      key: `comments`,
                      icon: <ModeCommentIcon sx={sx.commentsIcon} />,
                      value: video.commentCount.toLocaleString(),
                    },
                  ]}
                  thumbnail={{
                    alt: video.title,
                    loader: cloudinaryLoader,
                    url: `/youtube/${video.videoId}`,
                  }}
                  title={video.title}
                  url={`https://www.youtube.com/watch?v=${video.videoId}`}
                />
              </Box>
            );
          })}
        </Box>
      )}
      <SiteFooter />
    </>
  );
};

export default LinkTree;
