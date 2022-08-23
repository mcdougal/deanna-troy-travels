import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import VideoDescription from './VideoDescription';
import VideoMetric from './VideoMetric';
import sx from './VideoPage.styles';

const VideoPage = ({
  video,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata video={video} />
      <SiteHeader />
      <Container maxWidth="md" sx={sx.pageContainer}>
        <Box sx={sx.videoContainer}>
          <EmbeddedYouTubeVideo videoId={video.videoId} />
        </Box>
        <Typography component="h1" sx={sx.videoTitle} variant="h5">
          {video.title}
        </Typography>
        <Box sx={sx.videoMetricsContainer}>
          <VideoMetric
            icon={<VisibilityIcon sx={sx.viewsIcon} />}
            value={video.viewCount.toLocaleString()}
          />
          <VideoMetric
            icon={<ThumbUpIcon sx={sx.likesIcon} />}
            value={video.likeCount.toLocaleString()}
          />
          <VideoMetric
            icon={<ModeCommentIcon sx={sx.commentsIcon} />}
            value={video.commentCount.toLocaleString()}
          />
        </Box>
        <Typography sx={sx.videoDescription} variant="body1">
          <VideoDescription description={video.description} />
        </Typography>
      </Container>
      <SiteFooter />
    </>
  );
};

export default VideoPage;
