import { Block, Inline } from '@contentful/rich-text-types';
import { Box, ButtonBase, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import { useState } from 'react';

import { ImageDialog } from '@components/generic';
import { contentfulLoader } from '@lib/contentful';

import { BlogPost } from '../../../getStaticProps';

import sx from './EmbeddedAsset.styles';

const MAX_HEIGHT = 500;

interface Props {
  links?: BlogPost[`content`][`links`];
  node: Block | Inline;
}

const EmbeddedAsset = ({ links, node }: Props): JSX.Element | null => {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const openImageDialog = (): void => {
    setIsImageDialogOpen(true);
  };

  const closeImageDialog = (): void => {
    setIsImageDialogOpen(false);
  };

  const asset = links?.assets.block.find((contentAsset) => {
    return contentAsset.sys.id === node.data.target.sys.id;
  });

  if (!asset?.url) {
    return null;
  }

  const { height, width } = asset;
  const aspectRatio = width / height;

  let renderedHeight;
  let renderedWidth;

  if (height > MAX_HEIGHT) {
    renderedHeight = MAX_HEIGHT;
    renderedWidth = MAX_HEIGHT * aspectRatio;
  } else {
    renderedHeight = height;
    renderedWidth = width;
  }

  return (
    <>
      <Box sx={sx.imageContainer}>
        <ButtonBase focusRipple onClick={openImageDialog} sx={sx.imageButton}>
          <Image
            alt={asset.description || undefined}
            height={renderedHeight}
            loader={contentfulLoader}
            src={asset.url}
            width={renderedWidth}
          />
        </ButtonBase>
        {asset.description && (
          <Typography color="textSecondary" sx={sx.caption} variant="caption">
            {asset.description}
          </Typography>
        )}
      </Box>
      <ImageDialog
        image={{
          alt: asset.description,
          loader: contentfulLoader,
          url: asset.url,
        }}
        onClose={closeImageDialog}
        open={isImageDialogOpen}
      />
    </>
  );
};

export default EmbeddedAsset;
