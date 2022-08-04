import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { SiteHeader } from '@components/common';

import sx from './BlogPostPage.styles';
import getStaticProps from './getStaticProps';

const BlogPostPage = ({
  blogPost,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  console.log(blogPost);

  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
        <meta key="description" content={blogPost.excerpt} name="description" />
        <meta key="og:title" content={blogPost.title} property="og:title" />
      </Head>
      <SiteHeader />
      <Container maxWidth="md">
        <h1>{blogPost.title}</h1>
        <article>{documentToReactComponents(blogPost.content.json)}</article>
      </Container>
    </>
  );
};

export default BlogPostPage;
