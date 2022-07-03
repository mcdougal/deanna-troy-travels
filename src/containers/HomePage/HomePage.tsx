import Button from '@mui/material/Button';
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
      <Button variant="contained">Hello World</Button>
      <video
        className={styles.heroVideo}
        playsInline
        muted
        loop
        autoPlay
        src={heroVideoUrl}
        data-src-mobile={heroVideoUrl}
        data-src-desktop={heroVideoUrl}
      />
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
