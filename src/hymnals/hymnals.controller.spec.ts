import { Test, TestingModule } from '@nestjs/testing';
import { HymnalsController } from './hymnals.controller';

describe('Hymnals Controller', () => {
  let controller: HymnalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HymnalsController],
    }).compile();

    controller = module.get<HymnalsController>(HymnalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
