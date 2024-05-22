import { Box } from '@mui/material';
import InnerHTML from 'dangerously-set-html-content';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import sx from './EmbeddedSnippet.styles';

interface Props {
  snippet: string;
}

const EmbeddedSnippet = ({ snippet }: Props): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (inView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [inView, hasLoaded]);

  return (
    <Box sx={sx.embeddedSnippetContainer}>
      <div ref={ref}>{hasLoaded && <InnerHTML html={snippet} />}</div>
    </Box>
  );
};

export default EmbeddedSnippet;
