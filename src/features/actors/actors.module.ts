import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorsEntity } from './actors.entity';
import { ActorsController } from './actors.controller';
import { ActorsService } from './actors.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActorsEntity])],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
