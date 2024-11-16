import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/legacy/image';

import {
  AmazonIcon,
  DepopIcon,
  MercariIcon,
  PoshmarkIcon,
} from '@components/icons';
import {
  GlobalAboutSection,
  SectionTitle,
  SiteFooter,
  SocialsIcons,
  VideoMediaCard,
} from '@components/site';
import { contentfulLoader } from '@lib/contentful';

import getStaticProps from './getStaticProps';
import sx from './LinkTree.styles';
import LogoAndTitle from './LogoAndTitle';
import PageMetadata from './PageMetadata';

const SVG_ICON_STYLES = {
  color: `#ff1694`,
  height: 20,
  width: 20,
} as const;

const LinkTree = ({
  linkTreeItems,
  playlistTitle,
  playlistVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const shops = [
    {
      icon: <AmazonIcon style={SVG_ICON_STYLES} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon style={SVG_ICON_STYLES} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <DepopIcon style={SVG_ICON_STYLES} />,
      label: `Depop`,
      url: `https://www.depop.com/deannatroyshop/`,
    },
    {
      icon: <MercariIcon style={SVG_ICON_STYLES} />,
      label: `Mercari`,
      url: `https://www.mercari.com/u/141412516/`,
    },
  ];

  return (
    <>
      <PageMetadata />
      <Container maxWidth="md" sx={{ ...sx.container, ...sx.headerSection }}>
        <LogoAndTitle />
      </Container>
      <Container maxWidth="md" sx={{ ...sx.container, ...sx.socialsSection }}>
        <SocialsIcons
          include={[`youTube`, `tikTok`, `instagram`, `facebook`]}
          spacing={2}
        />
      </Container>
      <Container
        component={Stack}
        maxWidth="xs"
        spacing={1}
        sx={{ ...sx.container, ...sx.linksSection }}>
        {linkTreeItems.map(({ label, image, url }) => {
          return (
            <Button
              key={label}
              color="inherit"
              component="a"
              focusRipple
              fullWidth
              href={url}
              size="large"
              startIcon={
                <Box sx={sx.linkIconImageContainer}>
                  <Image
                    alt=""
                    layout="fill"
                    loader={contentfulLoader}
                    objectFit="cover"
                    objectPosition="center"
                    sizes="100px"
                    src={image.url}
                  />
                </Box>
              }
              sx={sx.link}
              target="_blank"
              variant="outlined">
              <Box sx={sx.linkLabel}>{label}</Box>
            </Button>
          );
        })}
      </Container>
      <Container maxWidth="sm" sx={{ ...sx.container, ...sx.shopsSection }}>
        <Box sx={sx.shopsTitleContainer}>
          <SectionTitle variant="h4">Online Shops</SectionTitle>
        </Box>
        <Grid container spacing={2}>
          {shops.map(({ icon, label, url }) => {
            return (
              <Grid key={label} item sm={6} xs={12}>
                <Button
                  color="inherit"
                  fullWidth
                  href={url}
                  size="large"
                  startIcon={icon}
                  sx={sx.shopButton}
                  target="_blank"
                  variant="outlined">
                  <Box sx={sx.shopButtonLabel}>{label}</Box>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {playlistVideos.length > 0 && (
        <Container maxWidth="md" sx={{ ...sx.container, ...sx.videosSection }}>
          <Box sx={sx.videosTitleContainer}>
            <SectionTitle variant="h4">{playlistTitle}</SectionTitle>
          </Box>
          <Box sx={sx.videosContent}>
            <Stack spacing={5}>
              {playlistVideos.map((video) => {
                return <VideoMediaCard key={video.videoId} video={video} />;
              })}
            </Stack>
            <Box sx={sx.globalAboutSectionContainer}>
              <GlobalAboutSection variant="narrow" />
            </Box>
          </Box>
        </Container>
      )}
      <SiteFooter />
    </>
  );
};

export default LinkTree;
