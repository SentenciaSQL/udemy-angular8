import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Andres';
  nombre2 = 'anDRes de jesus frIAs guzman';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccio: {
      calle: 'Primera',
      casa: '19'
    }
  };

  varlorDePromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Llrgo la data!'), 3500);
  });

  fecha = new Date();

  video = 'bBMWTzsDaXE';

  activar: boolean = true;
}
