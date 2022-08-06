import { spacing } from '@lib/mui';

export default {
  heroSectionContainer: {
    position: `relative`,
  },
  circleAndImageContainer: {
    height: spacing(50),
    overflow: `hidden`,
    position: `relative`,
  },
  circleBackground: {
    backgroundColor: `#f9f9f9`,
    borderRadius: `100%`,
    bottom: spacing(-21),
    height: spacing(150),
    left: { xs: `-75vw`, md: `-5vw` },
    position: `absolute`,
    right: { xs: `-75vw`, md: `-5vw` },
    transform: `translateY(55%)`,
    width: { xs: `250vw`, md: `110vw` },
  },
  heroImageContainer: {
    bottom: spacing(-1),
    height: spacing(45),
    left: `50%`,
    maxWidth: spacing(100),
    position: `absolute`,
    transform: `translateX(-50%)`,
    width: `100%`,
  },
};
