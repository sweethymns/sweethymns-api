import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

import { Client } from '../clients/interfaces/client.interface';

import { OauthService } from './oauth.service';

@Injectable()
export class HttpBasicStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly oauthService: OauthService) {
    super();
  }

  async validate(clientId: string, clientSecret: string): Promise<Client> {
    const client = await this.oauthService.validateClient(
      clientId,
      clientSecret,
    );

    if (!client) {
      throw new UnauthorizedException();
    }

    return client;
  }
}
