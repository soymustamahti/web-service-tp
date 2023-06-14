import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsEntity } from './films.entity';
import { FilmsController } from './films.contoller';
import { FilmsService } from './films.service';
import { ActorsEntity } from '../actors/actors.entity';
import { GenresEntity } from '../genres/genres.entity';
import { FilmsRepository } from './films.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([FilmsEntity, ActorsEntity, GenresEntity]),
  ],
  controllers: [FilmsController],
  providers: [FilmsService, FilmsRepository],
})
export class FilmsModule {}
