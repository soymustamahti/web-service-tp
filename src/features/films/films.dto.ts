export class CreateFilmDto {
  name: string;
  synopsis: string;
  release_year: number;
  genre_id: number;
  actor_ids: number[];
}

export class UpdateFilmDto {
  name?: string;
  synopsis?: string;
  release_year?: number;
  genre_id?: number;
  actor_ids?: number[];
}
