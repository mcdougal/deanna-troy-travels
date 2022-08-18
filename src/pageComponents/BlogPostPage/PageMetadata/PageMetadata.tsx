import { HtmlHead, StructuredData } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost, BlogPostVideo } from '../getStaticProps';

interface Props {
  blogPost: BlogPost;
  blogPostVideo: BlogPostVideo | null;
}

const PageMetadata = ({ blogPost, blogPostVideo }: Props): JSX.Element => {
  const blogPostThumbnail = getBlogPostThumbnail(blogPost);

  const title = blogPost.title;
  const description = blogPost.excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/post/${blogPost.slug}`;
  const imageUrl = blogPostThumbnail.loader({
    src: blogPostThumbnail.url,
    width: 1200,
  });

  const structuredData: StructuredData = {
    '@type': `BlogPosting`,

    // Common
    '@id': canonicalUrl,
    description,
    image: imageUrl,
    mainEntityOfPage: { '@type': `WebPage`, '@id': canonicalUrl },
    name: title,
    url: canonicalUrl,

    // Breadcrumbs
    breadcrumb: {
      '@type': `BreadcrumbList`,
      name: `Breadcrumbs`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          name: `Blog`,
          item: `https://www.deannatroytravels.com/blog`,
        },
        {
          '@type': `ListItem`,
          position: 2,
          name: title,
          item: canonicalUrl,
        },
      ],
    },

    // Specific
    author: {
      '@type': `Person`,
      name: `Deanna Troy Henry`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    datePublished: blogPost.publishedDate,
    headline: title,
    keywords: blogPost.tags.join(`,`),
    publisher: {
      '@type': `Organization`,
      name: `Deanna Troy Travels`,
      url: `https://www.deannatroytravels.com/about`,
      logo: {
        type: `ImageObject`,
        url: `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659523212/deanna-troy-travels/logo.png`,
      },
    },
    sharedContent: blogPostVideo
      ? {
          '@type': `VideoObject`,
          '@id': `https://www.youtube.com/watch?v=${blogPostVideo.videoId}`,
          url: `https://www.youtube.com/watch?v=${blogPostVideo.videoId}`,
        }
      : undefined,
  };

  return (
    <HtmlHead
      canonicalUrl={canonicalUrl}
      description={description}
      imageUrl={imageUrl}
      structuredData={structuredData}
      title={`${title} | Deanna Troy Travels`}
    />
  );
};

export default PageMetadata;
