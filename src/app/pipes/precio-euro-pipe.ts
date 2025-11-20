import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioEuro',
  standalone: true,
})
export class PrecioEuroPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    return value.toFixed(2).replace('.', ',') + ' €';
  }
}
