import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorsEntity } from './actors.entity';
import { CreateActorDto, UpdateActorDto } from './actors.dto';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(ActorsEntity)
    private readonly actorsRepository: Repository<ActorsEntity>,
  ) {}

  async getAllActors(): Promise<ActorsEntity[]> {
    return this.actorsRepository.find();
  }

  async getActorById(id: number): Promise<ActorsEntity | undefined> {
    return this.actorsRepository.findOneBy({ id });
  }

  async createActor(createActorDto: CreateActorDto): Promise<ActorsEntity> {
    const newActor = this.actorsRepository.create(createActorDto);
    return this.actorsRepository.save(newActor);
  }

  async updateActor(
    id: number,
    updateActorDto: UpdateActorDto,
  ): Promise<ActorsEntity | null> {
    const actor = await this.getActorById(id);
    if (actor) {
      Object.assign(actor, updateActorDto);
      return this.actorsRepository.save(actor);
    }
    return null;
  }

  async deleteActor(id: number): Promise<ActorsEntity | null> {
    const actor = await this.getActorById(id);
    if (actor) {
      await this.actorsRepository.delete(id);
      return actor;
    }
    return null;
  }
}
