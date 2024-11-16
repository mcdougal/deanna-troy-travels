import { Box, Grid } from '@mui/material';

import { BlogPostImageGallery as IBlogPostImageGallery } from '../../../../getStaticProps';

import BlogPostImage from './BlogPostImage';
import sx from './BlogPostImageGallery.styles';

type Props = {
  blogPostImageGallery: IBlogPostImageGallery;
};

const BlogPostImageGallery = ({ blogPostImageGallery }: Props): JSX.Element => {
  return (
    <Box sx={sx.imageGalleryContainer}>
      <Grid
        alignItems="stretch"
        container
        spacing={1}
        sx={sx.imageGalleryInnerGrid}>
        {blogPostImageGallery.imagesCollection.items.map((image) => {
          let sm: number;

          if (blogPostImageGallery.imagesCollection.items.length === 1) {
            sm = 12;
          } else if (blogPostImageGallery.imagesCollection.items.length === 2) {
            sm = 6;
          } else {
            sm = 4;
          }

          return (
            <Grid key={image.sys.id} item sm={sm} sx={sx.gridItem} xs={12}>
              <BlogPostImage image={image} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BlogPostImageGallery;
