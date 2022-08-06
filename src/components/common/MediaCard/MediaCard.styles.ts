export default {
  mediaCardButtonBase: {
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    borderRadius: 5,
    display: `block`,
    padding: 1,
    paddingBottom: 0,
    position: `relative`,
    transition: `all 0.1s ease-in-out`,
    width: `100%`,
    '&:hover': {
      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
    },
  },
  thumbnailContainer: {
    borderRadius: 4,
    filter: `brightness(95%)`,
    height: {
      xs: 20 * 8,
      md: 50 * 8,
    },
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
