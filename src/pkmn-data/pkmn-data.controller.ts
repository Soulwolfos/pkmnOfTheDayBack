import { Controller, Get } from '@nestjs/common';
import { PkmnDataService } from './pkmn-data.service';

@Controller('pkmndata')
export class PkmnDataController {
  constructor(private readonly pokemonService: PkmnDataService) {}

  @Get()
  getPokemons() {
    return this.pokemonService.getPokemons();
  }
}