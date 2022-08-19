import { StructuredDataObject } from './types';

interface Args {
  commentCount: number;
  description: string;
  duration: string;
  likeCount: number;
  thumbnailUrl: string;
  title: string;
  uploadDate: string;
  videoUrl: string;
  viewCount: number;
}

export default ({
  commentCount,
  description,
  duration,
  likeCount,
  thumbnailUrl,
  title,
  uploadDate,
  videoUrl,
  viewCount,
}: Args): StructuredDataObject => {
  return {
    '@id': videoUrl,
    '@type': `Article`,
    contentUrl: videoUrl,
    description,
    duration,
    interactionStatistic: [
      {
        '@type': `InteractionCounter`,
        interactionType: { '@type': `WatchAction` },
        userInteractionCount: viewCount,
      },
      {
        '@type': `InteractionCounter`,
        interactionType: { '@type': `LikeAction` },
        userInteractionCount: likeCount,
      },
      {
        '@type': `InteractionCounter`,
        interactionType: { '@type': `CommentAction` },
        userInteractionCount: commentCount,
      },
    ],
    name: title,
    thumbnailUrl,
    uploadDate,
  };
};
