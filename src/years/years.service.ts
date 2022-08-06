import { Album } from './../albums/entities/album.entity';
import { Year } from './entities/year.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';

@Injectable()
export class YearsService {
  public constructor(
    @InjectRepository(Year)
    private readonly yearRepository: Repository<Year>,
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ) {}

  public async findAll() {
    return await this.yearRepository.find();
  }

  public async findOne(year: number) {
    if (isNaN(year)) {
      throw new NotFoundException(`Year not found`);
    }

    const result = await this.albumRepository.find({
      where: { year },
      relations: ['genre'],
    });

    if (result.length == 0) {
      throw new NotFoundException(`Year not found`);
    }

    return result;
  }

  /*public async findOne(id: number) {
    return await `This action returns a #${id} year`;
  }

  create(createYearDto: CreateYearDto) {
    return 'This action adds a new year';
  }

  findAll() {
    return `This action returns all years`;
  }

  findOne(id: number) {
    return `This action returns a #${id} year`;
  }

  update(id: number, updateYearDto: UpdateYearDto) {
    return `This action updates a #${id} year`;
  }

  remove(id: number) {
    return `This action removes a #${id} year`;
  }*/
}
