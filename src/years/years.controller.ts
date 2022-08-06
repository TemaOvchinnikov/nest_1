import { Controller, Get, Param } from '@nestjs/common';
import { YearsService } from './years.service';

@Controller('years')
export class YearsController {
  public constructor(private readonly yearsService: YearsService) {}

  @Get()
  public async findAll() {
    return await this.yearsService.findAll();
  }

  @Get(':year')
  public async findOne(@Param('year') year: number) {
    return await this.yearsService.findOne(year);
  }

  /*
  @Post()
  create(@Body() createYearDto: CreateYearDto) {
    return this.yearsService.create(createYearDto);
  }

  @Get()
  findAll() {
    return this.yearsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yearsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYearDto: UpdateYearDto) {
    return this.yearsService.update(+id, updateYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yearsService.remove(+id);
  }*/
}
