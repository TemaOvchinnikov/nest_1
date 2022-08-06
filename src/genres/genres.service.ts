import { Album } from './../albums/entities/album.entity';
import { Genre } from './entities/genre.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {
  public constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ) {}

  public async findAll() {
    return await this.genreRepository.find();
  }

  public async findOne(id: number) {
    const result = await this.albumRepository.find({
      relations: ['genre'],
      where: { genre: id },
    });

    if (!result) {
      throw new NotFoundException(`Genre #${id} not found`);
    }

    return result;
  }
}
