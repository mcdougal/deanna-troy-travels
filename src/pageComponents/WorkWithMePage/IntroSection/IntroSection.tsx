import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import { Miscellaneous } from '../getStaticProps';

import sx from './IntroSection.styles';

type Props = {
  miscellaneous: Miscellaneous;
};

const IntroSection = ({ miscellaneous }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Container component="section" maxWidth="md" sx={sx.introSectionContainer}>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna posing with a quokka"
          layout="fill"
          loader={cloudinaryLoader}
          objectFit="cover"
          objectPosition="top"
          sizes={[
            `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
            `300px`,
          ].join(`,`)}
          src="/upload/deanna-troy-travels/work-with-me/hello.png"
        />
      </Box>
      <Box>
        <Typography paragraph sx={sx.letsChatParagraph} variant="body1">
          I’m a travel enthusiast who’s all about exploring the world on a
          budget while keeping it vegan! My YouTube channel is where you’ll find
          me sharing unforgettable adventures across Southeast Asia, the U.S.
          and Europe, packed with tips for traveling smart and eating
          plant-based. You might have seen me featured on RokuTV, HideoutTV or
          NaviSavi, where I love showcasing unique destinations and experiences.
        </Typography>
        <Typography paragraph sx={sx.letsChatParagraph} variant="body1">
          I’ve partnered with amazing brands like Vasco and Hohem to create
          sponsored content that brings travel and tech together. If you’re
          looking for someone to promote travel, budget-friendly finds, vegan
          eats or eco-friendly products and experiences, I’m your go-to travel
          buddy! Let’s make magic together. 🌍✨
        </Typography>
        <Box sx={sx.ctaContainer}>
          <Button
            color="primary"
            href={miscellaneous.resumeButton.url}
            size="large"
            sx={sx.ctaButton}
            target="_blank"
            variant="outlined">
            {miscellaneous.resumeButton.label}
          </Button>
          <Button
            color="primary"
            href="mailto:deanna.troy.henry@gmail.com"
            size="large"
            sx={sx.ctaButton}
            target="_blank"
            variant="contained">
            Email Me
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default IntroSection;
