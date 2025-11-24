import { Injectable, signal } from '@angular/core';
import { Producto } from './productos';

export interface LineaPedido {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private lineas: LineaPedido[] = [];

  // Total de unidades (para navbar, etc.)
  totalUnidades = signal(0);

  private actualizarTotales() {
    const total = this.lineas.reduce((s, l) => s + l.cantidad, 0);
    this.totalUnidades.set(total);
  }

  getLineas(): LineaPedido[] {
    return this.lineas;
  }

  getCantidad(producto: Producto): number {
    const linea = this.lineas.find(l => l.producto.id === producto.id);
    return linea ? linea.cantidad : 0;
  }

  incrementar(producto: Producto) {
    const linea = this.lineas.find(l => l.producto.id === producto.id);
    if (linea) {
      linea.cantidad++;
    } else {
      this.lineas.push({ producto, cantidad: 1 });
    }
    this.actualizarTotales();
  }

  decrementar(producto: Producto) {
    const idx = this.lineas.findIndex(l => l.producto.id === producto.id);
    if (idx === -1) return;

    this.lineas[idx].cantidad--;
    if (this.lineas[idx].cantidad <= 0) {
      this.lineas.splice(idx, 1);
    }
    this.actualizarTotales();
  }

  setCantidad(producto: Producto, cantidad: number) {
    const idx = this.lineas.findIndex(l => l.producto.id === producto.id);

    if (cantidad <= 0 || Number.isNaN(cantidad)) {
      if (idx !== -1) this.lineas.splice(idx, 1);
      this.actualizarTotales();
      return;
    }

    if (idx === -1) {
      this.lineas.push({ producto, cantidad });
    } else {
      this.lineas[idx].cantidad = cantidad;
    }
    this.actualizarTotales();
  }

  eliminarProducto(productoId: number) {
    const idx = this.lineas.findIndex(l => l.producto.id === productoId);
    if (idx !== -1) {
      this.lineas.splice(idx, 1);
      this.actualizarTotales();
    }
  }

  getTotalImporte(): number {
    return this.lineas.reduce(
      (total, l) => total + l.producto.precio * l.cantidad,
      0
    );
  }

  vaciar() {
    this.lineas = [];
    this.actualizarTotales();
  }
}
