import { Box, Grid, useTheme } from '@mui/material';
import Image from 'next/image';

import { contentfulLoader } from '@lib/contentful';

import { BlogPostImageGallery as IBlogPostImageGallery } from '../../../../getStaticProps';

import sx from './BlogPostImageGallery.styles';

interface Props {
  blogPostImageGallery: IBlogPostImageGallery;
}

const BlogPostImageGallery = ({ blogPostImageGallery }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box sx={sx.imageGalleryContainer}>
      <Grid
        alignItems="stretch"
        container
        spacing={1}
        sx={sx.imageGalleryInnerGrid}>
        {blogPostImageGallery.imagesCollection.items.map((image) => {
          return (
            <Grid key={image.sys.id} item sm={4} sx={sx.gridItem} xs={12}>
              <Box sx={sx.imageContainer}>
                <Image
                  alt={image.description || undefined}
                  layout="fill"
                  loader={contentfulLoader}
                  objectFit="cover"
                  objectPosition="center"
                  sizes={[
                    `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
                    `300px`,
                  ].join(`,`)}
                  src={image.url}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BlogPostImageGallery;
