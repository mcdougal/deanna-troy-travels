import { ModeComment, PlayArrow, ThumbUp } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

import { MediaCard, SectionContainer, SectionTitle } from '@components/common';

import { RecentVideo } from '../types';

import sx from './FeaturedVideos.styles';

interface Props {
  recentVideos: Array<RecentVideo>;
}

const FeaturedVideos = ({ recentVideos }: Props): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Featured Videos</SectionTitle>
      </Box>
      <Grid container flexDirection="column" spacing={8}>
        {recentVideos.map((recentVideo) => {
          return (
            <Grid key={recentVideo.videoId} item>
              <MediaCard
                action1={{
                  icon: <ThumbUp sx={sx.thumbUpIcon} />,
                  value: `${recentVideo.likeCount}`,
                }}
                action2={{
                  icon: <ModeComment sx={sx.modeCommentIcon} />,
                  value: `${recentVideo.commentCount}`,
                }}
                action3={{
                  icon: <PlayArrow sx={sx.playArrowIcon} />,
                }}
                thumbnail={{
                  alt: recentVideo.title,
                  url: recentVideo.thumbnailUrl,
                }}
                url={`https://www.youtube.com/watch?v=${recentVideo.videoId}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

export default FeaturedVideos;
