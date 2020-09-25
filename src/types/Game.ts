import { Video } from '../Video';
import { Cover } from './Cover';
import { Genres } from './Genres';
import { MultiplayerModes } from './MultiplayerModes';
import { Screenshot } from './Screenshot';
import { Theme } from './Theme';

export interface Game {
  id: number;
  name: string;
  game_modes: [];
  cover: Cover;
  multiplayerModes: MultiplayerModes;
  genres: Genres;
  keywords: string[];
  platforms: any;
  player_perspectives: any;
  screenshots: Screenshot[];
  artworks: any;
  storyline: string;
  summary: string;
  tags: string[];
  themes: Theme[];
  url: string;
  videos: Video[];
  websites: string[];
}

export default Game; 