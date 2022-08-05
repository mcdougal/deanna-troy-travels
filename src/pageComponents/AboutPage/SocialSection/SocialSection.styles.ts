import { spacing } from '@lib/mui';

export default {
  sectionTitleContainer: {
    marginBottom: 3,
  },
  button: {
    '& + &': {
      marginTop: 2,
    },
  },
  youTubeIcon: {
    '&&': {
      fontSize: 20,
      marginTop: `-3px`,
    },
  },
  instagramIcon: {
    '&&': {
      fontSize: 18,
    },
  },
  facebookIcon: {
    '&&': {
      fontSize: 18,
      marginTop: `-3px`,
    },
  },
  poshmarkIcon: {
    '&&': {
      fontSize: 18,
      marginTop: `-2px`,
    },
  },
  tikTokIcon: {
    '&&': {
      fontSize: 18,
      marginTop: `-3px`,
    },
  },
  amazonIcon: {
    '&&': {
      fontSize: 17,
      marginBottom: `-1px`,
    },
  },
  buttonLabel: {
    minWidth: spacing(10),
  },
};
