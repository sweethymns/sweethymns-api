import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OauthModule } from './oauth/oauth.module';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { HymnalsModule } from './hymnals/hymnals.module';

@Module({
  imports: [
    OauthModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.dbUri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
    ClientsModule,
    HymnalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
