import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenresEntity } from '../genres/genres.entity';
import { ActorsEntity } from '../actors/actors.entity';

@Entity('films')
export class FilmsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  synopsis: string;

  @Column({ nullable: true })
  release_year: number;

  @ManyToOne(() => GenresEntity, (genre) => genre.films, { cascade: true })
  genre: GenresEntity;

  @ManyToMany(() => ActorsEntity, { cascade: true })
  @JoinTable({
    name: 'films_actors',
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: ActorsEntity[];
}
