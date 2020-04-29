import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getChars(page?:number){
    if(page){
      return this.http.get(`https://swapi.dev/api/people/?page=${page}`);
    }
    return this.http.get('https://swapi.dev/api/people/');
  }
  
  searchChars(keyword: string){
    return this.http.get(`https://swapi.dev/api/people/?search=${keyword}`);
  }

  getPlanets(page?:number){
    if(page){
      return this.http.get(`https://swapi.dev/api/planets/?page=${page}`);
    }
    return this.http.get('https://swapi.dev/api/planets/');
  }

  searchPlanets(keyword: string){
    return this.http.get(`https://swapi.dev/api/people/?search=${keyword}`);
  }

  getSpecies(page?:number){
    if(page){
      return this.http.get(`https://swapi.dev/api/species/?page=${page}`);
    }
    return this.http.get('https://swapi.dev/api/species/');
  }

  searchSpecies(keyword: string){
    return this.http.get(`https://swapi.dev/api/people/?search=${keyword}`);
  }

  getStarships(page?:number){
    if(page){
      return this.http.get(`https://swapi.dev/api/starships/?page=${page}`);
    }
    return this.http.get('https://swapi.dev/api/starships/');
  }

  searchStarships(keyword: number){
    return this.http.get(`https://swapi.dev/api/people/?search=${keyword}`);
  }
}
