export interface Article {
  id: number;
  name: string;
  title: string;
  author: string;
  artist: string[];
  tags: string[];
  date: Date;
  spotifyUrl?: string;
  soundcloudUrl?: string;
  youtubeUrl?: string;
  isVideo?: boolean;
  isAudio?: boolean;
  isWriteUp?: boolean;
  image?: string;
};

// export interface  Artist {
//   id: number;
//   name: string;
// };

