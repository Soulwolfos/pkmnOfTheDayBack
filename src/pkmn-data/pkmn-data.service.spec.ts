import { Test, TestingModule } from '@nestjs/testing';
import { PkmnDataService } from './pkmn-data.service';

describe('PkmnDataService', () => {
  let service: PkmnDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkmnDataService],
    }).compile();

    service = module.get<PkmnDataService>(PkmnDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
