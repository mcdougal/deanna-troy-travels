import { useEffect } from 'react';

interface Props {
  videoId: string;
}

const EmbeddedTikTokPost = ({ videoId }: Props): JSX.Element => {
  useEffect(() => {
    const scriptElem = document.createElement(`script`);

    scriptElem.async = true;
    scriptElem.defer = true;
    scriptElem.src = `https://www.tiktok.com/embed.js`;

    const body: HTMLElement | null = document.body;

    if (body) {
      body.appendChild(scriptElem);
    }
  }, []);

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@deannatroytravels/video/${videoId}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;"> <section><a target="_blank" title="@deannatroytravels" href="https://www.tiktok.com/@deannatroytravels">@deannatroytravels</a></section></blockquote>`,
      }}
    />
  );
};

export default EmbeddedTikTokPost;
