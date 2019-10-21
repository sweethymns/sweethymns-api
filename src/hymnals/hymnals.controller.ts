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
  async getHymnalsByIds(@Query('ids') ids: string): Promise<HymnalsDTO> {
    const hymnals: Hymnal[] = await this.hymnalsService.findHymnalsByIds(ids);
    return new HymnalsDTO({ hymnals });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async getHymnalById(@Param('id') id: string): Promise<HymnalDTO> {
    const hymnal: Hymnal = await this.hymnalsService.findHymnalById(id);
    return new HymnalDTO({ hymnal });
  }
}
