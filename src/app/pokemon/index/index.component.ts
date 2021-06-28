import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import * as AOS from 'aos';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private service: PokemonService) { }

  pokemons: Pokemon[] = [];

  paginate = false
  page: number = 1;
  filter: string = "";
  totalCount: number = 0;
  totalPage: number = 0;
  pageSize: number = 60;


  onSearch(){
    this. CarregarDados();
  }

  clickPage(page:number){
    this.page = page;
    this.CarregarDados();
  }

  ngOnInit(): void {
    this.CarregarDados();
      AOS.init(
        {
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        }
      );
  }

  CarregarDados(){
    this.paginate = false;
    this.service.getSearch(this.page, this.filter, this.pageSize).subscribe((data: any) => {


      this.pokemons = <Pokemon[]>data.data.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));

      this.page = <number>data.page;
      this.totalCount = <number>data.totalCount;
      this.totalPage =  this.totalCount / this.pageSize;
      if(this.totalCount % this.pageSize){
        this.totalPage += 1;
      }
      this.paginate = true;




    }, (error: any) => {
      console.log('ERROR', error);
    });
  }
}
