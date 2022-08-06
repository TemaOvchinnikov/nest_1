import { Album } from './../albums/entities/album.entity';
import { Year } from './entities/year.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { YearsService } from './years.service';
import { YearsController } from './years.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Year, Album])],
  controllers: [YearsController],
  providers: [YearsService],
})
export class YearsModule {}
