/* eslint-disable react/no-danger */
import { Box } from '@mui/material';

import sx from './EmbeddedSnippet.styles';

interface Props {
  snippet: string;
}

const EmbeddedSnippet = ({ snippet }: Props): JSX.Element => {
  return (
    <Box sx={sx.embeddedSnippetContainer}>
      <div dangerouslySetInnerHTML={{ __html: snippet }} />
    </Box>
  );
};

export default EmbeddedSnippet;
