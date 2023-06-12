import { Film } from './films';

export interface Actor {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  date_of_death?: Date;
  films: Film[];
}
