import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HymnalSchema } from './schemas/hymnal.schema';
import { HymnalsController } from './hymnals.controller';
import { HymnalsService } from './hymnals.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hymnal', schema: HymnalSchema }]),
  ],
  controllers: [HymnalsController],
  providers: [HymnalsService],
})
export class HymnalsModule {}
