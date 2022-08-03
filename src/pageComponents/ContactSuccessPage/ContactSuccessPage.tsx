import { Typography } from '@mui/material';
import Head from 'next/head';

const PAGE_TITLE = `Thanks! | Deanna Troy Travels`;
const PAGE_DESCRIPTION = `Travel videos from a backpacker who spent two years traveling around Asia! Japan, Vietnam, Malaysia and more! Deanna Troy Travels`;

const ContactSuccessPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta key="description" content={PAGE_DESCRIPTION} name="description" />
        <meta key="og:title" content={PAGE_TITLE} property="og:title" />
      </Head>
      <Typography variant="h4">Thanks!</Typography>
    </>
  );
};

export default ContactSuccessPage;
