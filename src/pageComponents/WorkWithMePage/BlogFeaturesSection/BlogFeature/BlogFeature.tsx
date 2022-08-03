import { Box, ButtonBase, Typography, useTheme } from '@mui/material';

import { ContentfulImage } from '@components/contentful';
import { BlogFeature as IBlogFeature } from '@lib/contentful';

import sx from './BlogFeature.styles';

interface Props {
  blogFeature: IBlogFeature;
}

const BlogFeature = ({ blogFeature }: Props): JSX.Element => {
  const theme = useTheme();

  const websiteLogoAspectRatio =
    blogFeature.websiteLogo.height / blogFeature.websiteLogo.width;

  const websiteLogoHeight = parseInt(theme.spacing(4).slice(0, -2));
  const websiteLogoWidth = websiteLogoHeight / websiteLogoAspectRatio;

  return (
    <ButtonBase
      focusRipple
      href={blogFeature.blogPostUrl}
      sx={sx.blogFeatureButtonBase}
      target="_blank">
      <ContentfulImage
        alt={`${blogFeature.websiteName} logo`}
        height={websiteLogoHeight}
        src={blogFeature.websiteLogo.url}
        width={websiteLogoWidth}
      />
      <Box sx={sx.thumbnailAndTitle}>
        <Box sx={sx.thumbnailContainer}>
          <ContentfulImage
            alt={`${blogFeature.websiteName} blog post thumbnail`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={blogFeature.thumbnail.url}
          />
        </Box>
        <Typography sx={sx.blogPostTitle} variant="body1">
          {blogFeature.blogPostTitle}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default BlogFeature;
