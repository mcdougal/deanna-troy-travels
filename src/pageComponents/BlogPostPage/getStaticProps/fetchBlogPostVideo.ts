import { fetchYouTubeVideo } from '@lib/youTube';

import { BlogPost } from './fetchBlogPost';

export interface BlogPostVideo {
  commentCount: number;
  description: string;
  duration: string;
  likeCount: number;
  publishedAt: string;
  tags: Array<string>;
  thumbnailUrl: string;
  title: string;
  videoId: string;
  viewCount: number;
}

export default async (blogPost: BlogPost): Promise<BlogPostVideo | null> => {
  if (!blogPost.youTubeVideoId) {
    return null;
  }

  const video = await fetchYouTubeVideo(blogPost.youTubeVideoId);

  return {
    commentCount: parseInt(video.statistics.commentCount, 10),
    description: video.snippet.description,
    duration: video.contentDetails.duration,
    likeCount: parseInt(video.statistics.likeCount, 10),
    publishedAt: video.snippet.publishedAt,
    tags: video.snippet.tags,
    thumbnailUrl:
      video.snippet.thumbnails.standard?.url ||
      video.snippet.thumbnails.high.url,
    title: video.snippet.title,
    videoId: video.id,
    viewCount: parseInt(video.statistics.viewCount, 10),
  };
};
