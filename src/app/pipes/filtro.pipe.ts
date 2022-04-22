import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: any, columna: any): any[] {

    if (texto === ''){
      return arreglo;
    }

     texto = texto.toLowerCase();

     return arreglo.filter(items => {
      return items[columna].toLowerCase().includes(texto);
    });



  }

}
