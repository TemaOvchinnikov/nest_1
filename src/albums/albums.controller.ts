import { Controller, Get, Param } from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  public constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  public async findAll() {
    return await this.albumsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return await this.albumsService.findOne(id);
  }

  /*
  @Get()
  public async findAll(
    @Query('years') years: number,
    @Query('genres') genres: number,
  ) {
    if (years && genres) {
      throw new NotFoundException();
    } else if (years) {
      return await this.albumsService.findAllYears(years);
    } else if (genres) {
      return await this.albumsService.findAllGenres(genres);
    }

    return await this.albumsService.findAll();
  }
  */

  /*@Get()
  public async findAll() {
    return await this.albumsService.findAll();
  }

  @Get()
  public async findAllYears(@Query('years') years: number) {
    return await years;
  }

  public async findAllGenres(@Query('genres') genres: number) {
    return await genres;
  }*/
}
