import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFilmDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsString({ message: 'Synopsis must be a string' })
  @IsNotEmpty({ message: 'Synopsis is required' })
  synopsis: string;
  @IsNumber({}, { message: 'Release year must be a number' })
  @IsNotEmpty({ message: 'Release year is required' })
  release_year: number;
  @IsOptional()
  @IsNumber({}, { message: 'Genre id must be a number' })
  genre_id?: number;
  @IsOptional()
  @IsArray({ message: 'Actor ids must be an array of actor ids' })
  actor_ids: number[];
}

export class UpdateFilmDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;
  @IsOptional()
  @IsString({ message: 'Synopsis must be a string' })
  synopsis?: string;
  @IsOptional()
  @IsNumber({}, { message: 'Release year must be a number' })
  release_year?: number;
  @IsOptional()
  @IsNumber({}, { message: 'Genre id must be a number' })
  genre_id?: number;
  @IsOptional()
  @IsArray({ message: 'Actor ids must be an array of actor ids' })
  actor_ids?: number[];
}
