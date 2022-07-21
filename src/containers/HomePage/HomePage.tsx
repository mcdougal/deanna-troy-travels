import { Box, Button, Container, Link, Typography } from '@mui/material';
import { google } from 'googleapis';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { ContentfulImage } from '@components/contentful';
import { getClient } from '@lib/contentful';
import { Header, Nav, Video } from '@lib/mui';

import styles from './styles';

//todo - video optimization https://simonhearne.com/2021/fast-responsive-videos/#conclusion

const YOUTUBE_LOGO_HEIGHT = 104;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT / 0.84;

interface Props {
  aboutMePhotoUrl: string;
  heroVideoPosterUrl: string;
  heroVideoUrl: string;
  recentVideos: Array<{
    thumbnail: {
      height: number;
      url: string;
      width: number;
    };
    title: string;
    videoId: string;
  }>;
  youTubeLogoUrl: string;
}

const HomePage = ({
  aboutMePhotoUrl,
  heroVideoPosterUrl,
  heroVideoUrl,
  recentVideos,
  youTubeLogoUrl,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <Container component="header" maxWidth="xl" sx={styles.header}>
        <Box sx={styles.mastheadContainer}>
          <ContentfulImage
            alt="Deanna Troy Travels"
            height={YOUTUBE_LOGO_HEIGHT}
            layout="fixed"
            src={youTubeLogoUrl}
            width={YOUTUBE_LOGO_WIDTH}
          />
          <Box sx={styles.titleContainer}>
            <Typography component="h1" sx={styles.title} variant="h2">
              Deanna Troy Travels
            </Typography>
            <Typography sx={styles.subtitle} variant="body2">
              Asia Travel Videos
            </Typography>
          </Box>
        </Box>
        <Box component="nav">
          <Button color="inherit" sx={styles.navItem}>
            About
          </Button>
          <Button color="inherit" sx={styles.navItem}>
            Destination
          </Button>
          <Button color="inherit" sx={styles.navItem}>
            Videos
          </Button>
          <Button color="inherit" sx={styles.navItem}>
            Blog
          </Button>
          <Button color="inherit" sx={styles.navItem}>
            Work With Me
          </Button>
          <Button color="inherit" sx={styles.navItem}>
            Newsletter
          </Button>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={styles.heroContainer}>
          <Box sx={styles.heroVideoContainer}>
            <Box
              autoPlay
              component="video"
              loop
              muted
              playsInline
              poster={heroVideoPosterUrl}
              src={heroVideoUrl}
              sx={styles.heroVideo}
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={styles.aboutMeContainer}>
          <Typography component="h2" variant="h3">
            Travel Video Creator
          </Typography>
          <Typography paragraph variant="body1">
            Deanna Troy Travels is a travel video creator on the platforms
            YouTube, Hideout.TV and Roku TV. Named in Feedspot’s 100 Solo Female
            Travel YouTube Channels Deanna aims to inspire others to break out
            of their comfort zones and immerse themselves in cultures other than
            their own with entertaining and insightful videos filmed in Japan,
            Vietnam and more!
          </Typography>
          <Typography paragraph variant="body1">
            Deanna Troy Travels spent two years traveling throughout Southeast
            Asia and is turning her adventures into videos that will educate,
            entertain and help fellow travelers!
            {` `}
            <Link href="https://www.youtube.com/deannatroytravels">
              Subscribe to her YouTube Channel
            </Link>
            {` `}
            for videos that show you how to survive the highs and lows of
            traveling long-term while laughing at yourself along the way!
          </Typography>
        </Box>
        <ContentfulImage
          alt="Photo of Deanna"
          height={YOUTUBE_LOGO_HEIGHT}
          layout="fixed"
          src={aboutMePhotoUrl}
          width={YOUTUBE_LOGO_WIDTH}
        />
        {recentVideos.map((video) => {
          return (
            <Typography key={video.videoId} paragraph variant="body1">
              {video.title}
            </Typography>
          );
        })}
      </Container>
      <Box component="footer" sx={styles.footer}>
        <Container maxWidth="xl" sx={styles.footerContainer}>
          <Box sx={styles.footerLogoContainer}>
            <Box sx={styles.footerTitleContainer}>
              <Typography component="h1" sx={styles.footerTitle} variant="h2">
                Deanna Troy Travels
              </Typography>
              <Typography sx={styles.footerSubtitle} variant="body2">
                Asia Travel Videos
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.footerNavContainer}>
            <Box component="nav">
              <Button color="inherit" sx={styles.navItem}>
                About
              </Button>
              <Button color="inherit" sx={styles.navItem}>
                Destination
              </Button>
              <Button color="inherit" sx={styles.navItem}>
                Videos
              </Button>
              <Button color="inherit" sx={styles.navItem}>
                Blog
              </Button>
              <Button color="inherit" sx={styles.navItem}>
                Work With Me
              </Button>
              <Button color="inherit" sx={styles.navItem}>
                Newsletter
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = getClient();

  const aboutMePhoto = await client.getAsset(`1Y0CIecYvysFJtYXYGgVVS`);
  const heroVideoPoster = await client.getAsset(`4JF7lCgolgG4maQZFyUBX0`);
  const heroVideo = await client.getAsset(`61uNl3b3SlkXLYHU1vWEVB`);
  const youTubeLogo = await client.getAsset(`6o9bRHadNfh3CztgulcHqn`);

  const youtube = google.youtube({
    version: `v3`,
    auth: process.env.GOOGLE_CLOUD_API_KEY,
  });

  // const channels = await youtube.channels.list({
  //   forUsername: `deannatroytravels`,
  //   part: `contentDetails`,
  // });

  const videosResponse = await youtube.playlistItems.list({
    part: [`snippet`, `contentDetails`, `status`],
    playlistId: `PLupawb160v0xF0_SUX5yHJE2GQogd7lx-`,
  });

  const videos = videosResponse.data.items || [];

  if (!videos) {
    throw new Error(`No recent YouTube videos found`);
  }

  return {
    props: {
      aboutMePhotoUrl: aboutMePhoto.fields.file.url,
      heroVideoPosterUrl: heroVideoPoster.fields.file.url,
      heroVideoUrl: heroVideo.fields.file.url,
      recentVideos: videos.map((video) => {
        return {
          thumbnailUrl: video.snippet?.thumbnails?.default,
          title: video.snippet?.title,
          videoId: video.snippet?.resourceId?.videoId,
        };
      }),
      youTubeLogoUrl: youTubeLogo.fields.file.url,
    },
    revalidate: 60,
  };
};

export default HomePage;
