import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { MediaCard } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './VideoMediaCard.styles';

interface YouTubeVideo {
  commentCount: number;
  description: string;
  duration: string;
  likeCount: number;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  videoId: string;
  viewCount: number;
}

interface Props {
  size?: `sm` | `md` | `lg`;
  video: YouTubeVideo;
}

const VideoMediaCard = ({ size = `sm`, video }: Props): JSX.Element => {
  const descriptionParts = video.description.split(`\n`);
  const longestDescriptionPart = descriptionParts.reduce((longest, part) => {
    if (!longest) {
      return part;
    }
    return part.length > longest.length ? part : longest;
  }, ``);

  return (
    <MediaCard
      description={longestDescriptionPart || undefined}
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
      size={size}
      thumbnail={{
        alt: video.title,
        loader: cloudinaryLoader,
        url: `/youtube/${video.videoId}`,
      }}
      title={video.title}
      url={`https://www.youtube.com/watch?v=${video.videoId}`}
    />
  );
};

export default VideoMediaCard;
