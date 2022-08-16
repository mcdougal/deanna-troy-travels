import { spacing } from '@lib/mui';

export default {
  imageGalleryContainer: {
    '-ms-overflow-style': `none`,
    '-webkit-overflow-scrolling': `touch`,
    marginBottom: { xs: 3, sm: 4 },
    marginX: { xs: -3, sm: 0 },
    overflowX: `auto`,
    scrollbarWidth: `none`,
    scrollBehavior: `smooth`,
    scrollSnapType: `x mandatory`,
    '&::-webkit-scrollbar': {
      height: 0,
      width: 0,
    },
  },
  imageGalleryInnerGrid: {
    flexWrap: { xs: `nowrap`, sm: `wrap` },
    '&::before': {
      content: `" "`,
      display: { xs: `block`, sm: `none` },
      paddingLeft: 3,
      height: `1px`,
    },
    '&::after': {
      content: `" "`,
      display: { xs: `block`, sm: `none` },
      paddingLeft: 3,
      height: `1px`,
    },
  },
  gridItem: {
    minWidth: spacing({ xs: 30, sm: 0 }),
    scrollSnapAlign: `center`,
    scrollSnapStop: `always`,
  },
  imageContainer: {
    height: 0,
    overflow: `hidden`,
    paddingTop: `100%`,
    position: `relative`,
    width: `100%`,
  },
};
