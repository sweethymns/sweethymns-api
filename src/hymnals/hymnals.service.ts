import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Hymnal } from './interfaces/hymnal.interface';

@Injectable()
export class HymnalsService {
  constructor(
    @InjectModel('Hymnal') private readonly hymnalModel: Model<Hymnal>,
  ) {}

  async find(ids: string[]): Promise<any[]> {
    const hymnals: any[] = [];

    for (let index = 0; index < ids.length; index++) {
      try {
        const hymnal: Hymnal = await this.hymnalModel.findById(ids[index]);
        hymnals[index] = hymnal ? hymnal.toObject() : null;
      } catch (error) {
        hymnals[index] = null;
      }
    }

    return hymnals;
  }

  async findById(id: string): Promise<Hymnal> {
    try {
      const hymnal: Hymnal = await this.hymnalModel.findById(id);
      return hymnal;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
