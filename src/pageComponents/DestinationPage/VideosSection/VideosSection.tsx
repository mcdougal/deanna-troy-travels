import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Grid } from '@mui/material';

import { MediaCard } from '@components/generic';
import { SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../getStaticProps';

import sx from './VideosSection.styles';

interface Props {
  recentVideos: Array<YouTubeVideo>;
}

//todo

const VideosSection = ({ recentVideos }: Props): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Videos 🎥</SectionTitle>
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
                url={`https://www.youtube.com/watch?v=${recentVideo.videoId}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default VideosSection;
