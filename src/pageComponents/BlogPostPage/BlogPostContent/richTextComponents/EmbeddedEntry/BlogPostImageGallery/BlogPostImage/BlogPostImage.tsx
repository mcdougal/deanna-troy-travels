import { ButtonBase, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import { ImageDialog } from '@components/generic';
import { contentfulLoader } from '@lib/contentful';

import { BlogPostImageGallery } from '../../../../../getStaticProps';

import sx from './BlogPostImage.styles';

interface Props {
  image: BlogPostImageGallery['imagesCollection']['items'][number];
}

const BlogPostImage = ({ image }: Props): JSX.Element => {
  const theme = useTheme();
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const openImageDialog = (): void => {
    setIsImageDialogOpen(true);
  };

  const closeImageDialog = (): void => {
    setIsImageDialogOpen(false);
  };

  return (
    <>
      <ButtonBase focusRipple onClick={openImageDialog} sx={sx.imageButton}>
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
      </ButtonBase>
      <ImageDialog
        image={{
          alt: image.description,
          loader: contentfulLoader,
          url: image.url,
        }}
        onClose={closeImageDialog}
        open={isImageDialogOpen}
      />
    </>
  );
};

export default BlogPostImage;
