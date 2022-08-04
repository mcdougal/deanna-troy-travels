import ArrowForward from '@mui/icons-material/ArrowForward';
import ModeComment from '@mui/icons-material/ModeComment';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Visibility from '@mui/icons-material/Visibility';
import { Box, Button, Container } from '@mui/material';

import { MediaCard, SectionTitle } from '@components/common';

import { RecentVideo } from '../getStaticProps';

import sx from './FeaturedVideosSection.styles';

interface Props {
  recentVideos: Array<RecentVideo>;
}

const FeaturedVideosSection = ({ recentVideos }: Props): JSX.Element => {
  return (
    <Container maxWidth="md">
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
                  icon: <Visibility sx={sx.viewsIcon} />,
                  value: recentVideo.viewCount.toLocaleString(),
                },
                {
                  key: `likes`,
                  icon: <ThumbUp sx={sx.likesIcon} />,
                  value: recentVideo.likeCount.toLocaleString(),
                },
                {
                  key: `comments`,
                  icon: <ModeComment sx={sx.commentsIcon} />,
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
          endIcon={<ArrowForward fontSize="small" />}
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
