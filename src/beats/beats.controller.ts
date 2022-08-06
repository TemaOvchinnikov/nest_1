import { Controller, Get, Param } from '@nestjs/common';
import { BeatsService } from './beats.service';

@Controller('beats')
export class BeatsController {
  public constructor(private readonly beatsService: BeatsService) {}

  @Get()
  public async findAll() {
    return await this.beatsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return await this.beatsService.findOne(id);
  }

  /*@Post()
  create(@Body() createBeatDto: CreateBeatDto) {
    return this.beatsService.create(createBeatDto);
  }

  @Get()
  findAll() {
    return this.beatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beatsService.findOne(+id);
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeatDto: UpdateBeatDto) {
    return this.beatsService.update(+id, updateBeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beatsService.remove(+id);
  }
  */
}
