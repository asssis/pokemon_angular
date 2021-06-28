import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../service/pokemon.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor (private service: PokemonService, private route: ActivatedRoute) {}

  id: string = "";
  pokemon!: Pokemon;

  ngOnInit(): void {
    AOS.init(
      {
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      }
    );


    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.service.getFind(this.id).subscribe((data: { data: Pokemon; }) => {
      this.pokemon = <Pokemon>data.data;
      console.log(data.data);
    }, (error: any) => {
      console.log('ERROR', error);
    });
  }

}
