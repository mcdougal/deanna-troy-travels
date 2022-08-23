import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid } from '@mui/material';

import { MediaCard } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import { YouTubeVideo } from '../getStaticProps';

import sx from './VideosSection.styles';

interface Props {
  videos: Array<YouTubeVideo>;
}

const VideosSection = ({ videos }: Props): JSX.Element => {
  return (
    <Grid alignItems="stretch" container spacing={3}>
      {videos.map((video) => {
        return (
          <Grid key={video.videoId} item sm={4} xs={12}>
            <MediaCard
              details={[
                {
                  key: `views`,
                  icon: <VisibilityIcon sx={sx.viewsIcon} />,
                  value: video.viewCount.toLocaleString(),
                },
                {
                  key: `likes`,
                  icon: <ThumbUpIcon sx={sx.likesIcon} />,
                  value: video.likeCount.toLocaleString(),
                },
                {
                  key: `comments`,
                  icon: <ModeCommentIcon sx={sx.commentsIcon} />,
                  value: video.commentCount.toLocaleString(),
                },
              ]}
              thumbnail={{
                alt: video.title,
                loader: cloudinaryLoader,
                url: `/youtube/${video.videoId}`,
              }}
              title={video.title}
              url={`/videos/${video.videoId}`}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default VideosSection;
