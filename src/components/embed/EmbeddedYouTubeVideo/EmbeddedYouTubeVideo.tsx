import sx from './EmbeddedYouTubeVideo.styles';

type Props = {
  videoId: string;
};

const EmbeddedYouTubeVideo = ({ videoId }: Props): JSX.Element => {
  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      src={`https://www.youtube.com/embed/${videoId}`}
      style={sx.iframe}
      title="YouTube video player"
    />
  );
};

export default EmbeddedYouTubeVideo;
