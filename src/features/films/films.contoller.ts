import { Controller } from '@nestjs/common';

@Controller('film')
export class FilmsController {
  // constructor(private readonly filmsService: FilmsService) {}
  //
  // @Get()
  // getAllFilms(): Promise<FilmsEntity[]> {
  //   return this.filmsService.getAllFilms();
  // }
  //
  // @Get(':id')
  // getFilmById(@Param('id') id: number): Promise<FilmsEntity | undefined> {
  //   return this.filmsService.getFilmById(id);
  // }
  //
  // @Post()
  // createFilm(@Body() createFilmDto: CreateFilmDto): Promise<FilmsEntity> {
  //   return this.filmsService.createFilm(createFilmDto);
  // }
  //
  // @Put(':id')
  // updateFilm(
  //   @Param('id') id: number,
  //   @Body() updateFilmDto: UpdateFilmDto,
  // ): Promise<FilmsEntity | null> {
  //   return this.filmsService.updateFilm(id, updateFilmDto);
  // }
  //
  // @Delete(':id')
  // deleteFilm(@Param('id') id: number): Promise<FilmsEntity | null> {
  //   return this.filmsService.deleteFilm(id);
  // }
}