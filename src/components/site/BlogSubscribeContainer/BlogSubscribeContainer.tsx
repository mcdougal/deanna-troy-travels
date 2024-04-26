import { Box } from '@mui/material';

import sx from './BlogSubscribeContainer.styles';

interface Props {
  children: React.ReactNode;
}

const BlogSubscribeContainer = ({ children }: Props): JSX.Element => {
  return (
    <Box sx={sx.container}>
      <Box sx={sx.inner}>{children}</Box>
    </Box>
  );
};

export default BlogSubscribeContainer;
