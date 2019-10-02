import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Client } from './interfaces/client.interface';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async findOne(clientId: string): Promise<Client> {
    return await this.clientModel.findOne({ clientId });
  }
}
