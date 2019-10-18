import {
  Controller,
  Get,
  UseGuards,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { FindHymnalsParams } from './params/find-hymnals.params';
import { Hymnal } from './interfaces/hymnal.interface';
import { HymnalDTO } from './dto/hymnal.dto';
import { HymnalsDTO } from './dto/hymnals.dto';
import { HymnalsService } from './hymnals.service';

@Controller('v1/hymnals')
@UseGuards(AuthGuard('jwt'))
export class HymnalsController {
  constructor(private readonly hymnalsService: HymnalsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async find(
    @Query() findHymnalsParams: FindHymnalsParams,
  ): Promise<HymnalsDTO> {
    const ids: string[] = findHymnalsParams.ids.split(',');
    const hymnals = await this.hymnalsService.find(ids);
    return new HymnalsDTO({ hymnals });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HymnalDTO> {
    const hymnal: Hymnal = await this.hymnalsService.findById(id);
    return new HymnalDTO({ hymnal });
  }
}
