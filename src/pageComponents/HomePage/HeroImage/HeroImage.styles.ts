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
  emoji: {
    alignItems: `center`,
    background: `#f9f9f9`,
    borderRadius: `100%`,
    display: { xs: `none`, lg: `flex` },
    fontSize: 20,
    height: spacing(6),
    justifyContent: `center`,
    position: `absolute`,
    width: spacing(6),
  },
  emoji1: {
    left: 100,
    top: 100,
  },
  emoji2: {
    right: 100,
    top: 50,
  },
  emoji3: {
    left: 250,
    top: -50,
  },
  emoji4: {
    right: 300,
    top: -100,
  },
  emoji5: {
    left: 75,
    top: -175,
  },
  emoji6: {
    left: 350,
    top: -215,
  },
  emoji7: {
    right: 50,
    top: -175,
  },
};
