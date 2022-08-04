import { Typography } from '@mui/material';

import { estimateRichTextReadingTime } from '@lib/contentful';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostHeader.styles';

interface Props {
  blogPost: BlogPost;
}

const BlogPostHeader = ({ blogPost }: Props): JSX.Element => {
  console.log(blogPost);
  return (
    <>
      <Typography component="h1" sx={sx.title} variant="h3">
        {blogPost.title}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        <time dateTime={blogPost.date}>
          {new Date(blogPost.date).toLocaleDateString()}
        </time>
        {` • `}
        {estimateRichTextReadingTime(blogPost.content.json)} min
      </Typography>
    </>
  );
};

export default BlogPostHeader;
