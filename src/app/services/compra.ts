import { Injectable } from '@angular/core';
import { Libro } from './libros';

export interface ItemCompra {
  libro: Libro;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private items: ItemCompra[] = [];

  agregarLibro(libro: Libro) {
    const existente = this.items.find(i => i.libro.id === libro.id);
    if (existente) {
      existente.cantidad++;
    } else {
      this.items.push({ libro, cantidad: 1 });
    }
  }

  quitarLibro(id: number) {
    this.items = this.items.filter(i => i.libro.id !== id);
  }

  actualizarCantidad(id: number, cantidad: number) {
    const item = this.items.find(i => i.libro.id === id);
    if (item) {
      item.cantidad = cantidad;
    }
  }

  vaciar() {
    this.items = [];
  }

  getItems(): ItemCompra[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((t, i) => t + i.libro.precio * i.cantidad, 0);
  }
}
