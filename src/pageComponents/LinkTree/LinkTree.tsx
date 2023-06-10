import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, ButtonBase, Typography } from '@mui/material';
import { InferGetStaticPropsType } from 'next';

import { MediaCard } from '@components/generic';
import { SiteFooter } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStaticProps from './getStaticProps';
import sx from './LinkTree.styles';
import LogoAndTitle from './LogoAndTitle';
import PageMetadata from './PageMetadata';

const LinkTree = ({
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const mostRecentVideo = recentVideos.length > 0 ? recentVideos[0] : null;

  const links = [
    {
      label: `My Website`,
      icon: `🙋‍♀️`,
      url: `https://www.deannatroytravels.com/`,
    },
    {
      label: `YouTube`,
      icon: `🎥`,
      url: `https://www.youtube.com/@DeannaTroyTravels`,
    },
    {
      label: `Poshmark Closet`,
      icon: `👗`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      label: `Amazon Storefront`,
      icon: `🛍️`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    {
      label: `The Thrift Den`,
      icon: `👜`,
      url: `https://www.facebook.com/thethriftden`,
    },
    {
      label: `Travel Consulting`,
      icon: `✈️`,
      url: `https://egyd.one/deannatroytravels/`,
    },
  ];

  return (
    <>
      <PageMetadata />
      <Box sx={sx.logoAndTitleContainer}>
        <LogoAndTitle />
      </Box>
      <Box sx={sx.links}>
        {links.map(({ label, icon, url }) => {
          return (
            <ButtonBase
              key={label}
              component="a"
              focusRipple
              href={url}
              sx={sx.link}
              target="_blank">
              <Box sx={sx.linkInner}>
                <Typography color="primary" variant="h4">
                  {icon}
                </Typography>
                <Typography color="primary" sx={sx.linkLabel} variant="h4">
                  {label}
                </Typography>
              </Box>
            </ButtonBase>
          );
        })}
      </Box>
      {mostRecentVideo && (
        <Box pt={5} sx={sx.mostRecentVideoSection}>
          <Box mb={2}>
            <Typography align="center" variant="subtitle1">
              Latest Video
            </Typography>
          </Box>
          <Box px={1} sx={sx.mostRecentVideoContainer}>
            <MediaCard
              details={[
                {
                  key: `views`,
                  icon: <VisibilityIcon sx={sx.viewsIcon} />,
                  value: mostRecentVideo.viewCount.toLocaleString(),
                },
                {
                  key: `likes`,
                  icon: <ThumbUpIcon sx={sx.likesIcon} />,
                  value: mostRecentVideo.likeCount.toLocaleString(),
                },
                {
                  key: `comments`,
                  icon: <ModeCommentIcon sx={sx.commentsIcon} />,
                  value: mostRecentVideo.commentCount.toLocaleString(),
                },
              ]}
              thumbnail={{
                alt: mostRecentVideo.title,
                loader: cloudinaryLoader,
                url: `/youtube/${mostRecentVideo.videoId}`,
              }}
              title={mostRecentVideo.title}
              url={`https://www.youtube.com/watch?v=${mostRecentVideo.videoId}`}
            />
          </Box>
        </Box>
      )}
      <SiteFooter />
    </>
  );
};

export default LinkTree;
