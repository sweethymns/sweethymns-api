import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { ClientsModule } from '../clients/clients.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientPasswordStrategy } from './client-password.strategy';

@Module({
  imports: [ClientsModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, ClientPasswordStrategy],
})
export class AuthModule {}
