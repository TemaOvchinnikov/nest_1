import { Album } from './../albums/entities/album.entity';
import { Genre } from './entities/genre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Genre, Album])],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
