export default {
  mediaCardButtonBase: {
    alignItems: `flex-start`,
    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.06)`,
    borderRadius: 5,
    display: `flex`,
    flexDirection: `column`,
    height: `100%`,
    padding: 1,
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
    height: 0,
    overflow: `hidden`,
    paddingTop: `56.25%`,
    position: `relative`,
    width: `100%`,
  },
  title: {
    flex: 1,
    marginBottom: 1,
    marginTop: `12px`,
    marginX: 2,
  },
  details: {
    display: `flex`,
    flexWrap: `wrap`,
    marginTop: `4px`,
    paddingX: 2,
    '& > *': {
      marginRight: 2,
    },
  },
  alignRight: {
    justifyContent: `flex-end`,
  },
};
