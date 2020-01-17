import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activate: boolean): any {
    if (activate) {
      let salida = '';
      for ( let i = 0; i < value.length; i++ ) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
