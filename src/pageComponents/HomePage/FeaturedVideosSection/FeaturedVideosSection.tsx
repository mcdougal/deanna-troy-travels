import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Container, Grid } from '@mui/material';
import Link from 'next/link';

import { MediaCard } from '@components/generic';
import { SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../getStaticProps';

import sx from './FeaturedVideosSection.styles';

interface Props {
  recentVideos: Array<YouTubeVideo>;
}

const FeaturedVideosSection = ({ recentVideos }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Featured Videos 🎥</SectionTitle>
      </Box>
      <Grid alignItems="stretch" container spacing={2}>
        {recentVideos.map((recentVideo) => {
          return (
            <Grid key={recentVideo.videoId} item sm={4} xs={12}>
              <MediaCard
                details={[
                  {
                    key: `views`,
                    icon: <VisibilityIcon sx={sx.viewsIcon} />,
                    value: recentVideo.viewCount.toLocaleString(),
                  },
                  {
                    key: `likes`,
                    icon: <ThumbUpIcon sx={sx.likesIcon} />,
                    value: recentVideo.likeCount.toLocaleString(),
                  },
                  {
                    key: `comments`,
                    icon: <ModeCommentIcon sx={sx.commentsIcon} />,
                    value: recentVideo.commentCount.toLocaleString(),
                  },
                ]}
                thumbnail={{
                  alt: recentVideo.title,
                  loader: cloudinaryLoader,
                  url: `/youtube/${recentVideo.videoId}`,
                }}
                title={recentVideo.title}
                url={`/videos/${recentVideo.videoId}`}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={sx.ctaContainer}>
        <Link href="/videos" passHref>
          <Button
            color="primary"
            component="a"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            size="large"
            variant="contained">
            All Videos
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default FeaturedVideosSection;
