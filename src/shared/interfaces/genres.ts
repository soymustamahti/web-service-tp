import { Film } from './films';

export interface Genre {
  id: number;
  name: string;
  films: Film[];
}
