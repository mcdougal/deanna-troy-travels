import { Button, Container, Typography } from '@mui/material';
import Head from 'next/head';

import sx from './ContactSuccessPage.styles';

const PAGE_TITLE = `Thanks! | Deanna Troy Travels`;
const PAGE_DESCRIPTION = `Travel videos from a backpacker who spent two years traveling around Asia! Japan, Vietnam, Malaysia and more! Deanna Troy Travels`;

const ContactSuccessPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta key="description" content={PAGE_DESCRIPTION} name="description" />
        <meta key="og:title" content={PAGE_TITLE} property="og:title" />
        <meta key="robots" content="noindex" name="robots"></meta>
      </Head>
      <Container sx={sx.pageContainer}>
        <Typography variant="h3">Thanks!</Typography>
        <Typography sx={sx.description} variant="body1">
          I’ll reach out to you shortly. Keep an eye on your inbox!
        </Typography>
        <Button
          color="primary"
          onClick={(): void => {
            window.history.back();
          }}
          size="large"
          variant="contained">
          Go Back
        </Button>
      </Container>
    </>
  );
};

export default ContactSuccessPage;
