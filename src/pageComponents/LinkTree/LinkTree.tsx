import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, ButtonBase, Typography } from '@mui/material';
import { InferGetStaticPropsType } from 'next';

import { SiteFooter } from '@components/site';

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
  ];

  if (mostRecentVideo) {
    links.push({
      label: mostRecentVideo.title,
      icon: `📺`,
      url: `https://www.youtube.com/watch?v=${mostRecentVideo.videoId}`,
    });
  }

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
      <SiteFooter />
    </>
  );
};

export default LinkTree;
