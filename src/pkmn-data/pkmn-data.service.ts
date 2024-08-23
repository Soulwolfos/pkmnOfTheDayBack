import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PkmnDataService {
  private readonly url = 'https://pokeapi.co/api/v2/pokemon?limit=1025';

  constructor(private readonly httpService: HttpService) {}

  getPokemons(): Observable<any> {
    return this.httpService.get(this.url).pipe(
      map(response => response.data)
    );
  }
}