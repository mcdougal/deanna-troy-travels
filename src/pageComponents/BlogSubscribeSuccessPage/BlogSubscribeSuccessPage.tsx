import { Button, Container, Typography } from '@mui/material';
import Head from 'next/head';

import sx from './BlogSubscribeSuccessPage.styles';

const BlogSubscribeSuccessPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Thanks! | Deanna Troy Travels</title>
        <meta
          key="description"
          content="You are now subscribed to the Deanna Troy Travels blog"
        />
        <meta key="robots" content="noindex" name="robots"></meta>
      </Head>
      <Container sx={sx.pageContainer}>
        <Typography variant="h3">Subscribed!</Typography>
        <Typography sx={sx.description} variant="body1">
          Keep an eye on your inbox for new posts from the Deanna Troy Travels
          blog!
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

export default BlogSubscribeSuccessPage;
