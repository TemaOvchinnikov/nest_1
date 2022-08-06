import { Beat } from './entities/beat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BeatsService } from './beats.service';
import { BeatsController } from './beats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Beat])],
  controllers: [BeatsController],
  providers: [BeatsService],
})
export class BeatsModule {}
