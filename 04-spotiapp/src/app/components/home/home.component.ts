import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;
    this.spotify.getNewRelease().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = err.error.error.message;
      console.log(err.error.error.message);
    });
  }

  ngOnInit() {
  }

}
