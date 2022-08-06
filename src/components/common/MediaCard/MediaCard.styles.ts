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
  title: {
    marginBottom: 1,
    marginTop: `12px`,
    marginX: 2,
  },
  details: {
    display: `flex`,
    marginTop: `-2px`,
    paddingX: 2,
    '& > * + *': {
      marginLeft: 2,
    },
  },
  alignRight: {
    justifyContent: `flex-end`,
  },
};
