import { spacing } from '@lib/mui';

export default {
  dialog: {
    '& .MuiDialog-paper': {
      height: `100%`,
      paddingY: 3,
    },
  },
  imageContainer: {
    height: `100%`,
    position: `relative`,
    width: `100%`,
  },
  closeButton: {
    backgroundColor: `common.white`,
    position: `absolute`,
    right: spacing(1),
    top: spacing(1),
    '&:hover': {
      backgroundColor: `common.white`,
      color: `primary.main`,
    },
  },
  closeIcon: {
    fontSize: 30,
  },
};
