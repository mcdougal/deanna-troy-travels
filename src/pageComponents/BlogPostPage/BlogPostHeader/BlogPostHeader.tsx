import { Typography } from '@mui/material';

import { estimateRichTextReadingTime } from '@lib/contentful';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostHeader.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostHeader = ({ blogPost }: Props): JSX.Element => {
  return (
    <>
      <Typography component="h1" sx={sx.title} variant="h3">
        {blogPost.title}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        <time dateTime={blogPost.publishedDate}>
          {new Date(blogPost.publishedDate).toLocaleDateString()}
        </time>
        {` • `}
        {estimateRichTextReadingTime(blogPost.content.json)} min
        {blogPost.destination && (
          <>
            {` • `}
            {blogPost.destination.name}
          </>
        )}
      </Typography>
    </>
  );
};

export default BlogPostHeader;
