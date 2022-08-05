import { spacing } from '@lib/mui';

export default {
  menuDrawer: {
    '& .MuiDrawer-paper': {
      paddingLeft: 4,
      paddingRight: 2,
      width: `100%`,
    },
  },
  menuHeader: {
    paddingX: 2,
    paddingY: 2,
    textAlign: `right`,
  },
  closeIcon: {
    fontSize: spacing(5),
  },
};
