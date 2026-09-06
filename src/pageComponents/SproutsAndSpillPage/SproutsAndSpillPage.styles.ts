export default {
  pageContent: {
    minHeight: `60vh`,
  },
  pageTitle: {
    border: 0,
    clip: `rect(0 0 0 0)`,
    height: 1,
    margin: -1,
    overflow: `hidden`,
    padding: 0,
    position: `absolute`,
    whiteSpace: `nowrap`,
    width: 1,
  },
  intro: {
    alignItems: `center`,
    display: `flex`,
    flexWrap: `wrap`,
    gap: 5,
    justifyContent: `center`,
    marginTop: 5,
  },
  logoContainer: {
    flex: `0 1 320px`,
    maxWidth: 320,
    width: `100%`,
  },
  description: {
    flex: `1 1 480px`,
  },
  creatorLink: {
    fontWeight: `fontWeightBold`,
  },
  followPodcastCta: {
    display: `flex`,
    marginTop: 3,
  },
  episodesSection: {
    marginBottom: 16,
    marginTop: { xs: 6, md: 8 },
  },
  episodesTitle: {
    marginBottom: 5,
  },
  comingSoonContainer: {
    minHeight: { xs: 440, sm: 500 },
    overflow: `hidden`,
    position: `relative`,
  },
  comingSoonGrid: {
    display: `grid`,
    gap: 4,
    gridTemplateColumns: { xs: `1fr`, sm: `repeat(3, 1fr)` },
  },
  comingSoonCard: {
    aspectRatio: `16 / 9`,
    backgroundColor: `grey.100`,
    borderRadius: 1,
    '&:nth-of-type(n+3)': {
      display: { xs: `none`, sm: `block` },
    },
  },
  comingSoonMessage: {
    backgroundColor: `common.white`,
    borderRadius: `50%`,
    boxShadow: `0 0 44px 36px rgba(255, 255, 255, 0.96)`,
    left: `50%`,
    maxWidth: 480,
    padding: 2,
    position: `absolute`,
    textAlign: `center`,
    top: `37.5%`,
    transform: `translate(-50%, -50%)`,
    width: `calc(100% - 64px)`,
  },
  comingSoonTitle: {
    marginBottom: 1,
  },
};
