import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-obtener',
  templateUrl: './heroe-obtener.component.html',
  styles: []
})
export class HeroeObtenerComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroes(params.termino);
    });
    console.log(this.heroes);
  }

  ngOnInit() {

  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
  }

}
