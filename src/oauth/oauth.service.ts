import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as ms from 'ms';

import { Client } from '../clients/interfaces/client.interface';
import { ClientsService } from '../clients/clients.service';
import { ConfigService } from '../config/config.service';

import { AccessToken } from './interfaces/access-token.interface';

@Injectable()
export class OauthService {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

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

  async authenticate(client: Client): Promise<AccessToken> {
    const playload = { sub: client._id, name: client.name };
    return {
      access_token: this.jwtService.sign(playload),
      token_type: 'bearer',
      expires_in: ms(this.configService.get('JWT_EXPIRATION')),
    };
  }
}
