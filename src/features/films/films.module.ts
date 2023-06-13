import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsEntity } from './films.entity';
import { FilmsController } from './films.contoller';
import { FilmsService } from './films.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmsEntity])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
