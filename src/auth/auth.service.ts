import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { Client } from '../clients/interfaces/client.interface';
import { ClientsService } from '../clients/clients.service';

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {}

  async validateClient(
    clientId: string,
    clientSecret: string,
  ): Promise<Client> {
    const client: Client = await this.clientsService.findOne(clientId);

    if (client && bcrypt.compareSync(clientSecret, client.clientSecret)) {
      return client;
    }

    return null;
  }
}
