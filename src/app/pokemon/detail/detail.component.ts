import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor (private service: PokemonService, private route: ActivatedRoute) {}

  id: string = "";
  pokemon!: Pokemon;

  ngOnInit(): void { ;
    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.service.getFind(this.id).subscribe((data: { data: Pokemon; }) => {
      this.pokemon = <Pokemon>data.data;
    }, (error: any) => {
      console.log('ERROR', error);
    });
  }

}
