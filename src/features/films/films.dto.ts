export class CreateFilmDto {
  name: string;
  synopsis: string;
  release_year: number;
  genreId: number;
  actorIds: number[];
}

export class UpdateFilmDto {
  name?: string;
  synopsis?: string;
  release_year?: number;
  genreId?: number;
  actorIds?: number[];
}
