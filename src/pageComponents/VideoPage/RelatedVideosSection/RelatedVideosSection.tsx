import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';

import { MediaCard } from '@components/generic';
import { SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import { RelatedYouTubeVideo } from '../getStaticProps';

import sx from './RelatedVideosSection.styles';

interface Props {
  relatedVideos: Array<RelatedYouTubeVideo>;
}

const RelatedVideosSection = ({ relatedVideos }: Props): JSX.Element => {
  return (
    <>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Related Videos</SectionTitle>
      </Box>
      <Grid alignItems="stretch" container spacing={2}>
        {relatedVideos.map((relatedVideo) => {
          return (
            <Grid key={relatedVideo.videoId} item sm={4} xs={12}>
              <MediaCard
                details={[
                  {
                    key: `views`,
                    icon: <VisibilityIcon sx={sx.viewsIcon} />,
                    value: relatedVideo.viewCount.toLocaleString(),
                  },
                  {
                    key: `likes`,
                    icon: <ThumbUpIcon sx={sx.likesIcon} />,
                    value: relatedVideo.likeCount.toLocaleString(),
                  },
                  {
                    key: `comments`,
                    icon: <ModeCommentIcon sx={sx.commentsIcon} />,
                    value: relatedVideo.commentCount.toLocaleString(),
                  },
                ]}
                thumbnail={{
                  alt: relatedVideo.title,
                  loader: cloudinaryLoader,
                  url: `/youtube/${relatedVideo.videoId}`,
                }}
                title={relatedVideo.title}
                url={`/videos/${relatedVideo.videoId}`}
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
    </>
  );
};

export default RelatedVideosSection;
