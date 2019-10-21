import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Hymnal } from './interfaces/hymnal.interface';
import { MAX_HYMNALS_IDS, LENGTH_HYMNAL_ID } from './hymnals.constants';

@Injectable()
export class HymnalsService {
  constructor(
    @InjectModel('Hymnal') private readonly hymnalModel: Model<Hymnal>,
  ) {}

  async findHymnalsByIds(ids: string): Promise<Hymnal[]> {
    this.validateIds(ids);

    const hymnals: Hymnal[] = [];
    const hymnalsIds: string[] = ids.split(',');

    for (const id of hymnalsIds) {
      try {
        const hymnal: Hymnal = await this.hymnalModel.findById(id);
        hymnals.push(hymnal ? hymnal : null);
      } catch (error) {
        hymnals.push(null);
      }
    }

    return hymnals;
  }

  async findHymnalById(id: string): Promise<Hymnal> {
    this.validateId(id);

    const hymnal: Hymnal = await this.hymnalModel.findById(id);

    if (!hymnal) {
      throw new NotFoundException('Non existing id');
    }

    return hymnal;
  }

  private validateIds(ids: string): void {
    if (!ids) {
      throw new BadRequestException('Invalid id');
    }

    if (ids.split(',').length > MAX_HYMNALS_IDS) {
      throw new BadRequestException('Too many ids requested');
    }
  }

  private validateId(id: string): void {
    if (!id || id.length !== LENGTH_HYMNAL_ID) {
      throw new BadRequestException('Invalid id');
    }
  }
}
