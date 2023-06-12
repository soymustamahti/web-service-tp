import { Actor } from './actors';

export interface Film {
  id: number;
  name: string;
  synopsis: string;
  release_year?: number;
  genre: any;
  actors: Actor[];
}
