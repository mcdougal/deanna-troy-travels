import { spacing } from '@lib/mui';

export default {
  olList: {
    // Keep these styles in sync with Paragraph
    color: `#212529`,
    fontFamily: `Inter, Roboto, Arial`,
    fontSize: { xs: `1.125rem`, sm: `1.125rem` },
    fontWeight: `fontWeightRegular`,
    letterSpacing: 0,
    lineHeight: { xs: 1.625, sm: 1.7 },
    marginBottom: { xs: 3, sm: 4 },
    paddingInlineStart: spacing({ xs: 3, sm: 3 }),
    wordBreak: `break-word`,
    '& li + li': {
      marginTop: 2,
    },
    '& li > p': {
      margin: 0,
    },
  },
};
