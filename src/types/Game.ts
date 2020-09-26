import { Video } from '../Video';
import { Cover } from './Cover';
import { Genres } from './Genres';
import { MultiplayerModes } from './MultiplayerModes';
import { Platform } from './Platforms';
import { Screenshot } from './Screenshot';
import { Theme } from './Theme';

export interface Game {
  id: number;
  name: string;
  slug: string;
  game_modes: [];
  cover: Cover;
  multiplayerModes: MultiplayerModes;
  genres: Genres;
  keywords: string[];
  platforms: Platform;
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
  similar_games: number[];
}

export default Game; 