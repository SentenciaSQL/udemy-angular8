import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[] = [];

  url = environment.url;

  constructor(private http: HttpClient) { }

  getNominados() {
    if (this.juegos.length > 0 ) {
      console.log('desde cache');
      return of(this.juegos);
    } else {
      console.log('desde internet');
      return this.http.get<Game[]>(`${ this.url }/api/goty`)
        .pipe(
          tap(
            juegos => this.juegos = juegos
          )
        );
    }
  }

  votarJuego(id: string) {
    return this.http.post(`${ this.url }/api/goty/${id}`, {})
      .pipe(
        catchError( err => {
          console.log(err);
          return of(err.error);
        })
      )
  }
}
