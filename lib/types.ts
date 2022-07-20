export type ProjetType = {
  nom: string;
  title: string;
  techs: string[];
  github: string;
  link: string;
};

export type SkillsType = {
  skill: string[];
  title: string;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracksType = {
  tracks: Song[];
};
