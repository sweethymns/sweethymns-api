import { Test, TestingModule } from '@nestjs/testing';
import { HymnalsService } from './hymnals.service';

describe('HymnalsService', () => {
  let service: HymnalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HymnalsService],
    }).compile();

    service = module.get<HymnalsService>(HymnalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
