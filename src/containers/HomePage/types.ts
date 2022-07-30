export interface RecentVideo {
  commentCount: number;
  likeCount: number;
  thumbnail: {
    height: number;
    url: string;
    width: number;
  };
  title: string;
  videoId: string;
}

export interface AssetUrls {
  heroImageMobile: string;
  youTubeLogo: string;
}
