import { Component, OnInit, Input} from '@angular/core';
import { __importDefault } from 'tslib';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent{

  constructor(private route: Router){}

  @Input() id: string = "";
  @Input() img: string = "";

  goLink(): void{
    this.route.navigate(['/detail', this.id]);
  }

}


