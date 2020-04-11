import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(images: any): any {
    let url = 'http://image.tmdb.org/t/p/w300/';

    if(images.backdrop_path) {
      return url + images.backdrop_path;
    } else {
      if(images.poster_path) {
        return url + images.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }

  }

}
