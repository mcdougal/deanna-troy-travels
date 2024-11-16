import { Container } from '@mui/material';
import Head from 'next/head';

import { SiteHeader } from '@components/site';

import SubscribeSection from './SubscribeSection';
import sx from './SubscribeToBlogPage.styles';

const SubscribeToBlogPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Subscribe to Blog | Deanna Troy Travels</title>
        <meta
          key="description"
          content="Get blog posts delivered straight to your inbox!"
          name="description"
        />
        <meta key="robots" content="noindex" name="robots" />
      </Head>
      <SiteHeader />
      <Container maxWidth="sm" sx={sx.pageContainer}>
        <SubscribeSection />
      </Container>
    </>
  );
};

export default SubscribeToBlogPage;
