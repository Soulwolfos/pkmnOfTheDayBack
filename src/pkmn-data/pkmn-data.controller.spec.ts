import { Test, TestingModule } from '@nestjs/testing';
import { PkmnDataController } from './pkmn-data.controller';

describe('PkmnDataController', () => {
  let controller: PkmnDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkmnDataController],
    }).compile();

    controller = module.get<PkmnDataController>(PkmnDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
