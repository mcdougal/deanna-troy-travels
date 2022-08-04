import { spacing } from '@lib/mui';

export default {
  mediaCardContainer: {
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    borderRadius: 5,
    display: `block`,
    padding: 1,
    paddingBottom: 0,
    position: `relative`,
    width: `100%`,
  },
  thumbnailContainer: {
    borderRadius: 4,
    filter: `brightness(95%)`,
    height: spacing(20),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  details: {
    display: `flex`,
    marginLeft: 2,
    marginTop: `-2px`,
    '& > * + *': {
      marginLeft: 2,
    },
  },
};
