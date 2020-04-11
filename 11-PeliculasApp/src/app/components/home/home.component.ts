import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  relaeseDate = new Date();
  cartelera: any;

  image: string = 'http://image.tmdb.org/t/p/w300/';
  ///uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg

  constructor(public _ps: PeliculasService) {
    let relDate = formatDate(this.relaeseDate, 'yyyy-MM-dd', 'en');
    let lastDay = formatDate(this.relaeseDate.setDate(this.relaeseDate.getDate() + 14), 'yyyy-MM-dd', 'en');

    this._ps.getCarteleraActual(relDate, lastDay).subscribe( data => {
      this.cartelera = data;
      console.log(this.cartelera)
    });
  }

  ngOnInit() {
  }

}
