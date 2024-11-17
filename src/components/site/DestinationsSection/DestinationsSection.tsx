import { Box, Button, Stack } from '@mui/material';
import Link from 'next/link';

import SectionTitle from '../SectionTitle';

import sx from './DestinationsSection.styles';

type Destination = {
  name: string;
  slug: string;
};

type Props = {
  destinations: Array<Destination>;
};

const DestinationsSection = ({ destinations }: Props): JSX.Element => {
  return (
    <Box>
      <Box sx={sx.title}>
        <SectionTitle>Where Do You Want To Go?</SectionTitle>
      </Box>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={sx.buttonsContainer}>
        <Link href="/blog" passHref>
          <Button color="inherit" size="small" sx={sx.button} variant="text">
            Anywhere!
          </Button>
        </Link>
        {destinations.map((d) => {
          return (
            <Link key={d.slug} href={`/${d.slug}`} passHref>
              <Button
                color="inherit"
                size="small"
                sx={sx.button}
                variant="text">
                {d.name}
              </Button>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default DestinationsSection;
