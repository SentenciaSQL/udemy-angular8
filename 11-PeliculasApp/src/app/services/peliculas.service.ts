import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = environment.apikey;
  private urlMoviedb = environment.urlMoviedb;

  constructor(private http: HttpClient) { }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get(url)
    .pipe(
      map( (res: any) => res.results )
    );
  }

  buscarPelicula( texto: string ) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get(url)
    .pipe(
      map( (res: any) => res.results )
    );
  }

  getCarteleraActual( relaeseDate: any, lastDay: any ) {
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ relaeseDate }&primary_release_date.lte=${ lastDay }&api_key=${ this.apikey }&language=es`;

    return this.http.get(url)
    .pipe(
      map( (res: any) => res.results)
    );
  }

  private crearArreglo( peliculasObj: Object ) {
    //console.log(peliculasObj);
    let arr = [];
    Object.keys(peliculasObj).forEach( key => {
      arr.push(peliculasObj[key]);
      return arr;
    });
      console.log(arr);
  }


}
