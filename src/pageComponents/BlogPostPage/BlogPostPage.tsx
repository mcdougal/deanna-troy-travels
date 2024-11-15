import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';

import { SiteFooter, SiteHeader } from '@components/site';

import BlogPostContent from './BlogPostContent';
import BlogPostHeader from './BlogPostHeader';
import sx from './BlogPostPage.styles';
import BlogPostTags from './BlogPostTags';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import RelatedPostsSection from './RelatedPostsSection';
import ShareButtons from './ShareButtons';
import SubscribeSection from './SubscribeSection';

const BlogPostPage = ({
  blogPost,
  blogPostVideo,
  relatedBlogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  useEffect(() => {
    const scriptElem = document.createElement(`script`);

    scriptElem.id = `instagram-embed-script`;
    scriptElem.async = true;
    scriptElem.defer = true;
    scriptElem.src = `https://www.instagram.com/embed.js`;

    const body: HTMLElement | null = document.body;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instagram = (window as any).instgrm;

    if (body && !document.querySelector(`#instagram-embed-script`)) {
      body.appendChild(scriptElem);
    } else if (instagram) {
      instagram.Embeds?.process();
    }
  }, [blogPost.sys.id]);

  return (
    <>
      <PageMetadata blogPost={blogPost} blogPostVideo={blogPostVideo} />
      <SiteHeader />
      <Container
        key={blogPost.sys.id}
        maxWidth={false}
        sx={sx.blogPostPageContainer}>
        <BlogPostHeader blogPost={blogPost} />
        <Box sx={sx.contentContainer}>
          <BlogPostContent blogPost={blogPost} />
        </Box>
        <Box sx={sx.tagsContainer}>
          <BlogPostTags blogPost={blogPost} />
        </Box>
        <Box sx={sx.shareButtonsContainer}>
          <ShareButtons />
        </Box>
      </Container>
      <Container maxWidth="md" sx={sx.relatedPostsSectionContainer}>
        <RelatedPostsSection relatedBlogPosts={relatedBlogPosts} />
      </Container>
      <Container maxWidth="sm" sx={sx.subscribeSectionContainer}>
        <SubscribeSection />
      </Container>
      <SiteFooter />
    </>
  );
};

export default BlogPostPage;
