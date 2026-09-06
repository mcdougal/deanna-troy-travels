import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/legacy/image';

import {
  BlogPostMediaCard,
  SectionCta,
  SectionTitle,
  SiteFooter,
  SiteHeader,
  VideoMediaCard,
} from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import sx from './SproutsAndSpillPage.styles';

const COMING_SOON_CARD_KEYS = [
  `coming-soon-card-1`,
  `coming-soon-card-2`,
  `coming-soon-card-3`,
  `coming-soon-card-4`,
  `coming-soon-card-5`,
  `coming-soon-card-6`,
];

const SproutsAndSpillPage = ({
  blogPosts,
  miscellaneous,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  });

  const blogPostVideoIdsSet = new Set(
    blogPosts.map((blogPost) => {
      return blogPost.youTubeVideoId;
    }),
  );

  const videosWithoutBlogPosts = videos.filter((video) => {
    return !blogPostVideoIdsSet.has(video.videoId);
  });

  const hasEpisodes = blogPosts.length > 0 || videos.length > 0;

  return (
    <>
      <PageMetadata videos={videos} />
      <SiteHeader miscellaneous={miscellaneous} />
      <Box component="main" sx={sx.pageContent}>
        <Container maxWidth="lg">
          <Typography component="h1" sx={sx.pageTitle}>
            Sprouts and Spill
          </Typography>
          <Box sx={sx.intro}>
            <Box sx={sx.logoContainer}>
              <Image
                alt="Sprouts and Spill logo"
                height={2000}
                layout="responsive"
                loader={cloudinaryLoader}
                priority
                sizes="(max-width: 600px) 100vw, 320px"
                src="/upload/deanna-troy-travels/sprouts-and-spill/sprouts-and-spill-logo.png"
                width={2000}
              />
            </Box>
            <Box sx={sx.description}>
              {miscellaneous.sproutsAndSpillDescription ? (
                documentToReactComponents(
                  miscellaneous.sproutsAndSpillDescription,
                  {
                    renderNode: {
                      [BLOCKS.PARAGRAPH]: (node, children) => {
                        void node;
                        return (
                          <Typography paragraph variant="body1">
                            {children}
                          </Typography>
                        );
                      },
                      [INLINES.HYPERLINK]: (node, children) => {
                        return (
                          <Link
                            href={node.data.uri}
                            target={
                              node.data.uri.startsWith(`http`)
                                ? `_blank`
                                : undefined
                            }>
                            {children}
                          </Link>
                        );
                      },
                    },
                  },
                )
              ) : (
                <>
                  <Typography paragraph variant="body1">
                    Sprouts and Spill is a podcast celebrating vegan,
                    vegetarian, and plant-based food and lifestyles, hosted by
                    vegetarian foodie creators{` `}
                    <Link
                      href="https://instagram.com/deanna_troy_travels"
                      rel="noreferrer"
                      sx={sx.creatorLink}
                      target="_blank">
                      Deanna Troy Travels
                    </Link>{` `}
                    and{` `}
                    <Link
                      href="https://www.instagram.com/foodieveggie/"
                      rel="noreferrer"
                      sx={sx.creatorLink}
                      target="_blank">
                      Soumya Argawal
                    </Link>
                    .
                  </Typography>
                  <Typography paragraph variant="body1">
                    From local favorites to hidden gems, we spotlight vegan and
                    vegetarian businesses throughout Connecticut while diving
                    into the conversations, debates, and stories behind
                    plant-based living. Expect honest discussions, foodie
                    discoveries, local voices, and plenty of green vibes along
                    the way!
                  </Typography>
                </>
              )}
              {miscellaneous.sproutsAndSpillFollowPodcast.url && (
                <Box sx={sx.followPodcastCta}>
                  <SectionCta
                    color="primary"
                    href={miscellaneous.sproutsAndSpillFollowPodcast.url}
                    target="_blank"
                    variant="contained">
                    {miscellaneous.sproutsAndSpillFollowPodcast.label}
                  </SectionCta>
                </Box>
              )}
            </Box>
          </Box>
          <Box component="section" sx={sx.episodesSection}>
            <Box sx={sx.episodesTitle}>
              <SectionTitle>Episodes</SectionTitle>
            </Box>
            {hasEpisodes ? (
              <Grid alignItems="start" container spacing={4}>
                {sortedBlogPosts.map((blogPost) => {
                  return (
                    <Grid key={blogPost.slug} item md={4} sm={6} xs={12}>
                      <BlogPostMediaCard blogPost={blogPost} size="lg" />
                    </Grid>
                  );
                })}
                {videosWithoutBlogPosts.map((video) => {
                  return (
                    <Grid key={video.videoId} item md={4} sm={6} xs={12}>
                      <VideoMediaCard size="lg" video={video} />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <Box sx={sx.comingSoonContainer}>
                <Box aria-hidden sx={sx.comingSoonGrid}>
                  {COMING_SOON_CARD_KEYS.map((key) => {
                    return <Box key={key} sx={sx.comingSoonCard} />;
                  })}
                </Box>
                <Box sx={sx.comingSoonMessage}>
                  <Typography
                    color="primary"
                    component="p"
                    sx={sx.comingSoonTitle}
                    variant="h4">
                    Coming Soon
                  </Typography>
                  <Typography component="p" variant="body1">
                    New episodes are sprouting soon. Check back for our first
                    release!
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
      <SiteFooter />
    </>
  );
};

export default SproutsAndSpillPage;
