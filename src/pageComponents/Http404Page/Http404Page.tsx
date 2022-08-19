import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import { SiteHeader } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './Http404Page.styles';
import NavSection from './NavSection';

const Http404Page = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Page Not Found | Deanna Troy Travels</title>
        <meta
          key="description"
          content="The page you’re looking for doesn’t exist!"
          name="description"
        />
        <meta key="robots" content="noindex" name="robots"></meta>
      </Head>
      <SiteHeader />
      <Container maxWidth="sm" sx={sx.pageContainer}>
        <Typography color="primary" component="h1" sx={sx.title} variant="h3">
          Oops!
        </Typography>
        <Typography component="p" sx={sx.subtitle} variant="h5">
          There’s no page here.
        </Typography>
        <Box sx={sx.imageContainer}>
          <Image
            alt="Deanna painted to camouflage with an artsy bus"
            layout="fill"
            loader={cloudinaryLoader}
            objectFit="cover"
            objectPosition="center"
            priority
            sizes="600px"
            src="/upload/deanna-troy-travels/404.jpg"
          />
        </Box>
        <Typography component="p" sx={sx.navTitle} variant="subtitle1">
          What are you looking for?
        </Typography>
        <NavSection />
      </Container>
    </>
  );
};

export default Http404Page;
