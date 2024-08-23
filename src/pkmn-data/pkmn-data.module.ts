import { Module } from '@nestjs/common';
import { PkmnDataService } from './pkmn-data.service';
import { HttpModule } from '@nestjs/axios'; 
import { PkmnDataController } from './pkmn-data.controller';

@Module({
  imports: [HttpModule],
  controllers:[PkmnDataController],
  providers: [PkmnDataService],
})
export class PokemonModule {}