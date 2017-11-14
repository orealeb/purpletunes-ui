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

export interface Playlist {
  id: number;
  name: string;
  platform: string;
  numOfFollowers: string;
  cost: string;
  acceptanceRate: string;
  rating: number;
};

export interface Submission {
    name: string,
    email: string,
    url: string,
    playlists: Playlist[]
}

// export interface  Artist {
//   id: number;
//   name: string;
// };

