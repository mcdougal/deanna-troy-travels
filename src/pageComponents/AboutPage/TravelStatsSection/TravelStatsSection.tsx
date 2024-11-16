import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';

import { SectionCta, SectionTitle } from '@components/site';

import TravelStat from './TravelStat';
import sx from './TravelStatsSection.styles';

type Props = {
  blogPostsCount: number;
  videosCount: number;
};

const TravelStatsSection = ({
  blogPostsCount,
  videosCount,
}: Props): JSX.Element => {
  const stats = [
    { label: `Countries Visited`, value: `22` },
    { label: `Blog Posts`, value: blogPostsCount },
    { label: `Travel Videos`, value: videosCount },
  ];

  return (
    <Container maxWidth="sm">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Travel Stats</SectionTitle>
      </Box>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        {stats.map(({ label, value }) => {
          return (
            <TravelStat key={label} label={label} value={value.toString()} />
          );
        })}
      </Stack>
      <Box sx={sx.ctaContainer}>
        <Link href="/blog" legacyBehavior passHref>
          <SectionCta>See My Adventures</SectionCta>
        </Link>
      </Box>
    </Container>
  );
};

export default TravelStatsSection;
