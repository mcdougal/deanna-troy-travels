import { spacing } from '@lib/mui';

export default {
  sectionTitleContainer: {
    marginBottom: 3,
  },
  buttonsContainer: {
    alignItems: `center`,
    display: `flex`,
    flexWrap: `wrap`,
    gap: 2,
  },
  button: {
    flex: `1 0 auto`,
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
