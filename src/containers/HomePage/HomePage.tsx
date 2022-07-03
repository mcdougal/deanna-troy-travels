import Button from '@mui/material/Button';
import { createClient } from 'contentful';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import styles from './HomePage.module.css';

export default function HomePage({
  heroVideoUrl,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  return (
    <div>
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
}

export async function getStaticProps() {
  console.log(`HomePage.getStaticProps`);

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  //
  const heroVideo = await client.getAsset(`61uNl3b3SlkXLYHU1vWEVB`);

  console.log(JSON.stringify(heroVideo, null, 2));

  return {
    props: {
      heroVideoUrl: heroVideo.fields.file.url,
    },
    //revalidate: 60,
  };
}
