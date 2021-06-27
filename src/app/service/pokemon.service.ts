import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 @Injectable({
    providedIn: 'root'
 })

export class PokemonService {
  constructor(private http: HttpClient) {}
  pokemon: any;
  API = "https://api.pokemontcg.io/v2/";

  getSearch(page: number, filter: string, pageSize: number): any
  {
    if(filter == ""){
      return this.http.get<any>(`${this.API}cards?pageSize=${pageSize}&page=${page}`);
    }
    else{
      return this.http.get<any>(`${this.API}cards?q=name:${filter}&pageSize=16&page=${page}`);
    }

  }

  getFind(id: string): any
  {
    return this.http.get<any>(`${this.API}cards/${id}`)
  }
}
