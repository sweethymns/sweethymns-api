import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

import { Client } from '../clients/interfaces/client.interface';

import { AuthService } from './auth.service';

@Injectable()
export class HttpBasicStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(clientId: string, clientSecret: string): Promise<Client> {
    const client = await this.authService.validateClient(
      clientId,
      clientSecret,
    );

    if (!client) {
      throw new UnauthorizedException();
    }

    return client;
  }
}
