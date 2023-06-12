import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { Genre } from '../../shared/interfaces/genres';

@Entity('genres')
export class GenresEntity implements Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => FilmsEntity, (film) => film.genre)
  films: FilmsEntity[];
}
