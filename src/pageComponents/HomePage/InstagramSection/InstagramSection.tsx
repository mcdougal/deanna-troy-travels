import { Box, ButtonBase, Container, Grid } from '@mui/material';
import Image from 'next/legacy/image';

import { SectionCta, SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import { InstagramPost } from '../getStaticProps';

import sx from './InstagramSection.styles';

interface Props {
  recentInstagramPosts: Array<InstagramPost>;
}

const InstagramSection = ({ recentInstagramPosts }: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Instagram</SectionTitle>
      </Box>
      <Grid container spacing={1}>
        {recentInstagramPosts.map(({ id, caption, permalink }) => {
          return (
            <Grid key={id} item sm={3} xs={4}>
              <ButtonBase
                focusRipple
                href={permalink}
                sx={sx.thumbnailContainer}
                target="_blank">
                <Image
                  alt={caption || `Instagram post thumbnail`}
                  layout="fill"
                  loader={cloudinaryLoader}
                  objectFit="cover"
                  objectPosition="center"
                  sizes="250px"
                  src={`/upload/deanna-troy-travels/instagram/${id}`}
                />
              </ButtonBase>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={sx.ctaContainer}>
        <SectionCta
          href="https://www.instagram.com/deanna_troy_travels"
          target="_blank">
          See My Instagram
        </SectionCta>
      </Box>
    </Container>
  );
};

export default InstagramSection;
