import ArrowForward from '@mui/icons-material/ArrowForward';
import ModeComment from '@mui/icons-material/ModeComment';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { Box, Button } from '@mui/material';

import { MediaCard, SectionContainer, SectionTitle } from '@components/common';

import { RecentVideo } from '../getStaticProps';

import sx from './FeaturedVideosSection.styles';

interface Props {
  recentVideos: Array<RecentVideo>;
}

const FeaturedVideosSection = ({ recentVideos }: Props): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Featured Videos</SectionTitle>
      </Box>
      {recentVideos.map((recentVideo) => {
        return (
          <Box key={recentVideo.videoId} sx={sx.featuredVideoContainer}>
            <MediaCard
              detail1={{
                icon: <ThumbUp sx={sx.thumbUpIcon} />,
                value: `${recentVideo.likeCount}`,
              }}
              detail2={{
                icon: <ModeComment sx={sx.modeCommentIcon} />,
                value: `${recentVideo.commentCount}`,
              }}
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
    </SectionContainer>
  );
};

export default FeaturedVideosSection;
