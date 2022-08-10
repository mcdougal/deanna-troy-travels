import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  Box,
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
import makeAnchorIdForNode, { ANCHOR_ID_REGEX } from './makeAnchorIdForNode';

// Replace YouTube embed URLs with an iframe
const YOUTUBE_EMBED_REGEX =
  /https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9-]+\/?/g;

const contentfulRichTextOptions = (): Options => {
  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="h1" sx={sx.h1} variant="h3">
            {anchorId && <Box id={anchorId} sx={sx.headingAnchor} />}
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_2]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="h2" sx={sx.h2} variant="h4">
            {anchorId && <Box id={anchorId} sx={sx.headingAnchor} />}
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_3]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="h3" sx={sx.h3} variant="h5">
            {anchorId && <Box id={anchorId} sx={sx.headingAnchor} />}
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_4]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="h4" sx={sx.h4} variant="h6">
            {anchorId && <Box id={anchorId} sx={sx.headingAnchor} />}
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_5]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="h5" sx={sx.h5} variant="h6">
            {anchorId && <Box id={anchorId} sx={sx.headingAnchor} />}
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_6]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="h6" sx={sx.h6} variant="h6">
            {anchorId && <Box id={anchorId} sx={sx.headingAnchor} />}
            {children}
          </Typography>
        );
      },
      [INLINES.HYPERLINK]: (node, children): React.ReactNode => {
        return (
          <MuiLink
            href={node.data.uri}
            target={node.data.uri.startsWith(`http`) ? `_blank` : undefined}>
            {children}
          </MuiLink>
        );
      },
      [BLOCKS.LIST_ITEM]: (node, children): React.ReactNode => {
        return (
          <Box component="li" sx={sx.listItem}>
            {children}
          </Box>
        );
      },
      [BLOCKS.OL_LIST]: (node, children): React.ReactNode => {
        return (
          <Box component="ol" sx={sx.olList}>
            {children}
          </Box>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children): React.ReactNode => {
        const anchorId = makeAnchorIdForNode(node);

        return (
          <Typography component="p" sx={sx.paragraph} variant="h6">
            {anchorId && (
              <Box component="span" id={anchorId} sx={sx.headingAnchor} />
            )}
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
      [BLOCKS.UL_LIST]: (node, children): React.ReactNode => {
        return (
          <Box component="ul" sx={sx.ulList}>
            {children}
          </Box>
        );
      },
    },
    renderText: (text): React.ReactNode => {
      const textWithoutAnchorId = text.replace(ANCHOR_ID_REGEX, ``);
      const textParts = textWithoutAnchorId.split(YOUTUBE_EMBED_REGEX);
      const embedUrls = textWithoutAnchorId.match(YOUTUBE_EMBED_REGEX);

      return textParts.map((textPart, i) => {
        const embedUrl = embedUrls && embedUrls[i];

        return (
          <React.Fragment key={i}>
            {textPart.split(`\n`).map((t, j) => {
              return (
                <React.Fragment key={j}>
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
