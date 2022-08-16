import { Box, ButtonBase, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import { contentfulLoader } from '@lib/contentful';

import { BlogFeature as IBlogFeature } from '../../getStaticProps';

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
      <Image
        alt={
          blogFeature.websiteLogo.description ||
          `${blogFeature.websiteName} logo`
        }
        height={websiteLogoHeight}
        loader={contentfulLoader}
        src={blogFeature.websiteLogo.url}
        width={websiteLogoWidth}
      />
      <Box sx={sx.thumbnailAndTitle}>
        <Box sx={sx.thumbnailContainer}>
          <Image
            alt={
              blogFeature.thumbnail.description ||
              `${blogFeature.websiteName} blog post thumbnail`
            }
            layout="fill"
            loader={contentfulLoader}
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
