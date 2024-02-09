import { Box } from '@mui/material';
import InnerHTML from 'dangerously-set-html-content';
import { useInView } from 'react-intersection-observer';

import sx from './EmbeddedSnippet.styles';

interface Props {
  snippet: string;
}

const EmbeddedSnippet = ({ snippet }: Props): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Box sx={sx.embeddedSnippetContainer}>
      <div ref={ref}>{inView && <InnerHTML html={snippet} />}</div>
    </Box>
  );
};

export default EmbeddedSnippet;
