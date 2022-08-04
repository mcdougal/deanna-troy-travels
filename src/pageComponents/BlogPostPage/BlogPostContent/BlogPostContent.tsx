import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

import { BlogPost } from '../getStaticProps';

import sx from './BlogPostContent.styles';
import EmbeddedYouTubeVideo from './EmbeddedYouTubeVideo';

// Replace YouTube embed URLs with an iframe
const YOUTUBE_EMBED_REGEX =
  /https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9-]+\/?/g;

const contentfulRichTextOptions = (): Options => {
  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children): React.ReactNode => {
        return (
          <Typography component="h1" sx={sx.h1} variant="h3">
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_2]: (node, children): React.ReactNode => {
        return (
          <Typography component="h2" sx={sx.h2} variant="h4">
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_3]: (node, children): React.ReactNode => {
        return (
          <Typography component="h3" sx={sx.h3} variant="h5">
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_4]: (node, children): React.ReactNode => {
        return (
          <Typography component="h4" sx={sx.h4} variant="h6">
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_5]: (node, children): React.ReactNode => {
        return (
          <Typography component="h5" sx={sx.h5} variant="h6">
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_6]: (node, children): React.ReactNode => {
        return (
          <Typography component="h6" sx={sx.h6} variant="h6">
            {children}
          </Typography>
        );
      },
      [INLINES.HYPERLINK]: (node, children): React.ReactNode => {
        return (
          <MuiLink href={node.data.uri} target="_blank">
            {children}
          </MuiLink>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children): React.ReactNode => {
        return (
          <Typography paragraph variant="body1">
            {children}
          </Typography>
        );
      },
      [BLOCKS.TABLE]: (node, children): React.ReactNode => {
        return (
          <Table sx={sx.table}>
            <TableBody>{children}</TableBody>
          </Table>
        );
      },
      [BLOCKS.TABLE_CELL]: (node, children): React.ReactNode => {
        return <TableCell sx={sx.tableCell}>{children}</TableCell>;
      },
      [BLOCKS.TABLE_HEADER_CELL]: (node, children): React.ReactNode => {
        return (
          <TableCell sx={sx.tableHeaderCell}>
            <b>{children}</b>
          </TableCell>
        );
      },
      [BLOCKS.TABLE_ROW]: (node, children): React.ReactNode => {
        return <TableRow>{children}</TableRow>;
      },
    },
    renderText: (text): React.ReactNode => {
      const textParts = text.split(YOUTUBE_EMBED_REGEX);
      const embedUrls = text.match(YOUTUBE_EMBED_REGEX);

      return textParts.map((textPart, i) => {
        const embedUrl = embedUrls && embedUrls[i];

        return (
          <React.Fragment key={embedUrl || textPart}>
            {textPart.split(`\n`).map((t, j) => {
              return (
                <React.Fragment key={i}>
                  {j > 0 && <br />}
                  {t}
                </React.Fragment>
              );
            })}
            {embedUrl && <EmbeddedYouTubeVideo url={embedUrl} />}
          </React.Fragment>
        );
      });
    },
  };
};

interface Props {
  blogPost: BlogPost;
}

const BlogPostContent = ({ blogPost }: Props): JSX.Element => {
  return (
    <article>
      {documentToReactComponents(
        blogPost.content.json,
        contentfulRichTextOptions(),
      )}
    </article>
  );
};

export default BlogPostContent;
