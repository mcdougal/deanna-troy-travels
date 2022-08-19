import { Button, Container, Typography } from '@mui/material';
import Head from 'next/head';

import sx from './ContactSuccessPage.styles';

const ContactSuccessPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Thanks! | Deanna Troy Travels</title>
        <meta
          key="description"
          content="I’ll reach out to you shortly. Keep an eye on your inbox!"
          name="description"
        />
        <meta key="robots" content="noindex" name="robots"></meta>
      </Head>
      <Container sx={sx.pageContainer}>
        <Typography component="h1" variant="h3">
          Thanks!
        </Typography>
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
