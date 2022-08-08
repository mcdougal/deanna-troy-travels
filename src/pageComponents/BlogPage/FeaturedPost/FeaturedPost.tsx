import { Box, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { contentfulLoader } from '@lib/contentful';

import { BlogPost } from '../getStaticProps';

import sx from './FeaturedPost.styles';

interface Props {
  blogPost: BlogPost;
}

const FeaturedPost = ({ blogPost }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box sx={sx.featuredPostContainer}>
      <Typography sx={sx.featuredPostLabel} variant="body1">
        ✨ Featured Post
      </Typography>
      <Box sx={sx.coverImageContainer}>
        <Image
          alt={
            blogPost.coverImage.description || `${blogPost.title} cover image`
          }
          layout="fill"
          loader={contentfulLoader}
          objectFit="cover"
          objectPosition="center"
          priority
          sizes={[
            `(max-width: ${theme.breakpoints.values.md}px) 100vw`,
            `900px`,
          ].join(`,`)}
          src={blogPost.coverImage.url}
        />
      </Box>
      <Box sx={sx.featuredPostContent}>
        <Typography sx={sx.title} variant="h4">
          {blogPost.title}
        </Typography>
        <Typography color="textSecondary" sx={sx.excerpt} variant="body2">
          {blogPost.excerpt}
        </Typography>
        <Link href={`/post/${blogPost.slug}`} passHref>
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
