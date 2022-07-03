import { Typography } from '@mui/material';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getClient } from '@lib/contentful';

import styles from './HomePage.module.css';

interface Props {
  heroVideoUrl: string;
}

const HomePage = ({
  heroVideoUrl,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <video
          autoPlay
          className={styles.heroVideo}
          data-src-desktop={heroVideoUrl}
          data-src-mobile={heroVideoUrl}
          loop
          muted
          playsInline
          src={heroVideoUrl}
        />
        <Typography className={styles.heroTitle} variant="h1">
          Deanna Troy Travels
        </Typography>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const heroVideo = await getClient().getAsset(`61uNl3b3SlkXLYHU1vWEVB`);

  return {
    props: {
      heroVideoUrl: heroVideo.fields.file.url,
    },
    //revalidate: 60,
  };
};

export default HomePage;
