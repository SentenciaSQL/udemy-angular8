import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  casa: string = '';

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });

    if (this.heroe.casa === 'DC') {
      this.casa = 'assets/img/dc.png';
    } else {
      this.casa = 'assets/img/marvel.jpg';
    }
   }

  ngOnInit() {
  }

}
