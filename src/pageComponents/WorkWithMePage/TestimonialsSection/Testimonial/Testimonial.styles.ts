import { spacing } from '@lib/mui';

export default {
  testimonialContainer: {
    backgroundColor: `common.white`,
    borderRadius: 5,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    paddingX: 3,
    paddingY: 2,
  },
  testimonialContentCollapsed: {
    height: spacing(15),
    overflow: `hidden`,
    position: `relative`,
  },
  readMoreLink: {
    backgroundColor: `common.white`,
    bottom: 5,
    paddingLeft: 1,
    position: `absolute`,
    right: 0,
    '&::before': {
      background: `linear-gradient(to right, transparent, rgba(255 255 255 / 100%))`,
      bottom: 0,
      color: `text.primary`,
      content: `""`,
      display: `block`,
      left: 0,
      position: `absolute`,
      textDecoration: `none`,
      textDecorationColor: `transparent`,
      top: 0,
      transform: `translateX(-100%)`,
      width: spacing(4),
    },
  },
  personAndCompany: {
    display: `block`,
    marginTop: 2,
    textAlign: `right`,
  },
};
