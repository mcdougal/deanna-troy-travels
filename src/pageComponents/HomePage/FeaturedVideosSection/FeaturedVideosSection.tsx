import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Container, Grid } from '@mui/material';

import { MediaCard, SectionTitle } from '@components/common';
import { cloudinaryLoader } from '@lib/cloudinary';

import { RecentVideo } from '../getStaticProps';

import sx from './FeaturedVideosSection.styles';

interface Props {
  recentVideos: Array<RecentVideo>;
}

const FeaturedVideosSection = ({ recentVideos }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Featured Videos</SectionTitle>
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
                target="_blank"
                thumbnail={{
                  alt: recentVideo.title,
                  loader: cloudinaryLoader,
                  url: `/youtube/${recentVideo.videoId}`,
                }}
                title={recentVideo.title}
                url={`https://www.youtube.com/watch?v=${recentVideo.videoId}`}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={sx.ctaContainer}>
        <Button
          color="primary"
          endIcon={<ArrowForwardIcon fontSize="small" />}
          href="https://www.youtube.com/deannatroytravels"
          size="large"
          target="_blank"
          variant="contained">
          All Videos
        </Button>
      </Box>
    </Container>
  );
};

export default FeaturedVideosSection;
