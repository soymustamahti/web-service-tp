import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';

@Entity('genres')
export class GenresEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => FilmsEntity, (film) => film.genre)
  films: FilmsEntity[];
}
