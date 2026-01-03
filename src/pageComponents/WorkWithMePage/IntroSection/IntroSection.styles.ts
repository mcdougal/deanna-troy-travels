import { spacing } from '@lib/mui';

export default {
  videoRow: {
    display: `flex`,
    justifyContent: `center`,
  },
  videoContainer: {
    aspectRatio: `9/16`,
    borderRadius: 5,
    maxWidth: spacing({ sm: 38, md: 45 }),
    overflow: `hidden`,
    position: `relative`,
    width: `100%`,
  },
  buttonsSection: {
    marginX: `auto`,
    marginTop: 4,
    maxWidth: spacing({ sm: 38, md: 45 }),
  },
  buttonsContainer: {
    display: `flex`,
    flexDirection: `column`,
    gap: 2,
  },
  ctaButton: {
    flex: 1,
    whiteSpace: `nowrap`,
    '& .MuiButton-endIcon > *:nth-of-type(1)': {
      fontSize: 18,
    },
  },
};
