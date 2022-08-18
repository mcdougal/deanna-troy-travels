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

  const websiteLogoHeight = websiteLogoAspectRatio > 0.2 ? 3 : 2;

  const websiteLogoHeightPx = parseInt(
    theme.spacing(websiteLogoHeight).slice(0, -2),
  );

  const websiteLogoWidthPx = websiteLogoHeightPx / websiteLogoAspectRatio;

  return (
    <ButtonBase
      focusRipple
      href={blogFeature.blogPostUrl}
      sx={sx.blogFeatureButtonBase}
      target="_blank">
      <Box sx={sx.websiteLogoContainer}>
        <Image
          alt={
            blogFeature.websiteLogo.description ||
            `${blogFeature.websiteName} logo`
          }
          height={websiteLogoHeightPx}
          loader={contentfulLoader}
          src={blogFeature.websiteLogo.url}
          width={websiteLogoWidthPx}
        />
      </Box>
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
            sizes="72px"
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
