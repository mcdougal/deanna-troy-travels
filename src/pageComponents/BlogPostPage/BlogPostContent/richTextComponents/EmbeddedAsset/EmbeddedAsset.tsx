import { Block, Inline } from '@contentful/rich-text-types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { contentfulLoader } from '@lib/contentful';

import { BlogPost } from '../../../getStaticProps';

import sx from './EmbeddedAsset.styles';

const MAX_HEIGHT = 500;

interface Props {
  links?: BlogPost[`content`][`links`];
  node: Block | Inline;
}

const EmbeddedAsset = ({ links, node }: Props): JSX.Element | null => {
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
    <Box sx={sx.imageContainer}>
      <Image
        alt={asset.description || undefined}
        height={renderedHeight}
        loader={contentfulLoader}
        src={asset.url}
        width={renderedWidth}
      />
      {asset.description && (
        <Typography color="textSecondary" sx={sx.caption} variant="caption">
          {asset.description}
        </Typography>
      )}
    </Box>
  );
};

export default EmbeddedAsset;
