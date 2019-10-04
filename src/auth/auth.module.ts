import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { ClientsModule } from '../clients/clients.module';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
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
  controllers: [AuthController],
  providers: [AuthService, HttpBasicStrategy, JwtStrategy],
})
export class AuthModule {}
