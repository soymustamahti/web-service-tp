import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
}
