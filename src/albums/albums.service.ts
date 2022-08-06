import { Album } from './entities/album.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
  public constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ) {}

  public async findAll(): Promise<Album[]> {
    return await this.albumRepository.find();
  }

  public async findOne(id: number): Promise<Album> {
    const result = await this.albumRepository.findOne({
      where: { id: id },
      relations: ['genre', 'beats'],
    });

    if (!result) {
      throw new NotFoundException(`Album #${id} not found`);
    }

    return result;
  }

  /*
  public async findAllYears(years: number): Promise<Album[]> {
    const result = await this.albumRepository.find({
      where: { year: years },
      relations: ['genre'],
    });

    if (result.length == 0) {
      throw new NotFoundException(`Year not found`);
    }

    return result;
  }

  public async findAllGenres(genres: number): Promise<Album[]> {
    const result = await this.albumRepository.find({
      relations: ['genre'],
      where: { genre: genres },
    });

    if (result.length == 0) {
      throw new NotFoundException(`Genre not found`);
    }

    return result;
  }
  */

  /*public async findAll(years: string, genres: string): Promise<Album[]> {
    if (years) {
      const result = await this.albumRepository.find({
        where: { year: years },
        relations: ['genre'],
      });

      if (result.length == 0) {
        throw new NotFoundException(`Year not found`);
      }

      return result;
    }

    if (genres) {
      const result = await this.albumRepository.find({
        relations: ['genre'],
        where: { genre: genres },
      });

      if (result.length == 0) {
        throw new NotFoundException(`Genre not found`);
      }

      return result;
    }

    return await this.albumRepository.find();
  }*/
}
