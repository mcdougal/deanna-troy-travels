import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Container } from '@mui/material';

import { MediaCard, SectionTitle } from '@components/common';

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
      {recentVideos.map((recentVideo) => {
        return (
          <Box key={recentVideo.videoId} sx={sx.featuredVideoContainer}>
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
                url: recentVideo.thumbnailUrl,
              }}
              url={`https://www.youtube.com/watch?v=${recentVideo.videoId}`}
            />
          </Box>
        );
      })}
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
