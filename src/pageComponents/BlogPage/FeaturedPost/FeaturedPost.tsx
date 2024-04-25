import { Box, Button, ButtonBase, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost } from '../getStaticProps';

import sx from './FeaturedPost.styles';

interface Props {
  blogPost: BlogPost;
}

const FeaturedPost = ({ blogPost }: Props): JSX.Element => {
  const theme = useTheme();
  const thumbnail = getBlogPostThumbnail(blogPost);

  return (
    <Box sx={sx.featuredPostContainer}>
      <Typography sx={sx.featuredPostLabel} variant="body1">
        ✨ Featured Post
      </Typography>
      <Link href={`/post/${blogPost.slug}`} passHref legacyBehavior>
        <ButtonBase component="a" focusRipple sx={sx.coverImageContainer}>
          <Image
            alt={thumbnail.alt}
            layout="fill"
            loader={thumbnail.loader}
            objectFit="cover"
            objectPosition="center"
            priority
            sizes={[
              `(max-width: ${theme.breakpoints.values.md}px) 100vw`,
              `900px`,
            ].join(`,`)}
            src={thumbnail.url}
          />
        </ButtonBase>
      </Link>
      <Box sx={sx.featuredPostContent}>
        <Typography sx={sx.title} variant="h4">
          {blogPost.title}
        </Typography>
        <Typography color="textSecondary" sx={sx.excerpt} variant="body1">
          {blogPost.excerpt}
        </Typography>
        <Link href={`/post/${blogPost.slug}`} passHref legacyBehavior>
          <Button
            color="primary"
            component="a"
            fullWidth
            size="large"
            variant="contained">
            Read Post
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FeaturedPost;
