import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActorsService } from './actors.service';
import { CreateActorDto, UpdateActorDto } from './actors.dto';
import { ActorsEntity } from './actors.entity';

@Controller('actor')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get()
  getAllActors(): Promise<ActorsEntity[]> {
    return this.actorsService.getAllActors();
  }

  @Get(':id')
  getActorById(@Param('id') id: number): Promise<ActorsEntity | undefined> {
    return this.actorsService.getActorById(id);
  }

  @Post()
  createActor(@Body() createActorDto: CreateActorDto): Promise<ActorsEntity> {
    return this.actorsService.createActor(createActorDto);
  }

  @Put(':id')
  updateActor(
    @Param('id') id: number,
    @Body() updateActorDto: UpdateActorDto,
  ): Promise<ActorsEntity | null> {
    return this.actorsService.updateActor(id, updateActorDto);
  }

  @Delete(':id')
  deleteActor(@Param('id') id: number): Promise<ActorsEntity | null> {
    return this.actorsService.deleteActor(id);
  }
}
