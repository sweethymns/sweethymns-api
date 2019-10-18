import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { ClientsModule } from '../clients/clients.module';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';
import { HttpBasicStrategy } from './http-basic.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ClientsModule,
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [OauthController],
  providers: [OauthService, HttpBasicStrategy, JwtStrategy],
})
export class OauthModule {}
