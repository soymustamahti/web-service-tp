import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';

@Entity('actors')
export class ActorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  date_of_birth: Date;

  @Column({ nullable: true })
  date_of_death: Date;

  @ManyToMany(() => FilmsEntity, (film) => film.actors)
  films: FilmsEntity[];
}