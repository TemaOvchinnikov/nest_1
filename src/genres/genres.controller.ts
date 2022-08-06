import { AlbumsService } from './../albums/albums.service';
import { Controller, Get, Param } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  public constructor(
    private readonly genresService: GenresService,
    //private readonly albumsService: AlbumsService,
  ) {}

  @Get()
  public async findAll() {
    return await this.genresService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return await this.genresService.findOne(id);
    //const idGenre = await this.genresService.findOne(id);
    //console.log(idGenre.id);
  }
}
