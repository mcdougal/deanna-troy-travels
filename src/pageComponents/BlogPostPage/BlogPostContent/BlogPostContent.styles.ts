import { spacing } from '@lib/mui';

export default {
  headingAnchor: {
    display: `block`,
    position: `relative`,
    top: spacing(-10), // Offset fixed site header
    visibility: `hidden`,
  },
  h1: {
    marginBottom: { xs: 1, sm: 3 },
    marginTop: { xs: 4, sm: 6 },
  },
  h2: {
    marginBottom: { xs: 2, sm: 3 },
    marginTop: { xs: 4, sm: 6 },
  },
  h3: {
    marginBottom: { xs: 1, sm: 2 },
    marginTop: { xs: 3, sm: 4 },
  },
  h4: {
    marginBottom: { xs: 1, sm: 2 },
    marginTop: { xs: 2, sm: 4 },
  },
  h5: {
    marginBottom: { xs: 1, sm: 2 },
    marginTop: { xs: 2, sm: 4 },
  },
  h6: {
    marginBottom: { xs: 1, sm: 2 },
    marginTop: { xs: 2, sm: 4 },
  },
  listItem: {
    '& > p': {
      lineHeight: 1.5,
      marginBottom: { xs: 2, sm: 3 },
      marginLeft: 1,
    },
  },
  olList: {
    marginBottom: { xs: 3, sm: 4 },
    paddingInlineStart: spacing({ xs: 3, sm: 5 }),
  },
  paragraph: {
    fontWeight: `fontWeightRegular`,
    lineHeight: { xs: 2, sm: 2.2 },
    marginBottom: { xs: 3, sm: 4 },
  },
  table: {
    marginBottom: 4,
  },
  tableCell: {
    verticalAlign: `top`,
    '& *': {
      margin: 0,
    },
  },
  tableHeaderCell: {
    verticalAlign: `top`,
    '& *': {
      margin: 0,
    },
  },
  ulList: {
    marginBottom: { xs: 3, sm: 4 },
    paddingInlineStart: spacing({ xs: 3, sm: 5 }),
  },
};
