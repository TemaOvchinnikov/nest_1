import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beat } from './entities/beat.entity';
import { Injectable } from '@nestjs/common';
import { CreateBeatDto } from './dto/create-beat.dto';
import { UpdateBeatDto } from './dto/update-beat.dto';

@Injectable()
export class BeatsService {
  public constructor(
    @InjectRepository(Beat)
    private readonly beatRepository: Repository<Beat>,
  ) {}

  public async findAll() {
    return await this.beatRepository.find({ relations: ['album'] });
  }

  public async findOne(id: number) {
    return await `This action returns a #${id} beat`;
  }

  /*create(createBeatDto: CreateBeatDto) {
    return 'This action adds a new beat';
  }

  findAll() {
    return `This action returns all beats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beat`;
  }

  update(id: number, updateBeatDto: UpdateBeatDto) {
    return `This action updates a #${id} beat`;
  }

  remove(id: number) {
    return `This action removes a #${id} beat`;
  }*/
}
