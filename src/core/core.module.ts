import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ActorsModule } from '../features/actors/actors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [path.join(__dirname, '../features/**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    ActorsModule,
  ],
})
export class CoreModule {}
