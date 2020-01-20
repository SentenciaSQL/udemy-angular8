import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const TOKEN = environment.token;
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotyfy Service Listo');
  }

  gerQuery( query: string ) {
    const url = URL + query;

    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.gerQuery('browse/new-releases').pipe( map( (data: any) => {
      return data.albums.items;
    }));
  }

  getArtistas( termino: string ) {
    return  this.gerQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( (data: any) => data.artists.items));
  }

  getArtista( id: string ) {
    return  this.gerQuery(`artists/${id}`);
  }

  getTopTracks( id: string ) {
    return  this.gerQuery(`artists/${id}/top-tracks?country=us`).pipe( map( (data: any) => data.tracks));
  }
}
