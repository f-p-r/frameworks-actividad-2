import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, ProductosService } from '../services/productos';
import { PedidoService } from '../services/pedido';

@Component({
  selector: 'app-cafeteria-card-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafeteria-card-producto.html',
  styleUrl: './cafeteria-card-producto.css'
})
export class CafeteriaCardProducto {
  @Input() producto!: Producto;
  @Input() mostrarQuitar = false; // solo true en checkout

  constructor(
    private productosService: ProductosService,
    private pedidoService: PedidoService
  ) {}

  get imagenUrl(): string {
    return this.productosService.getImagen(this.producto);
  }

  get cantidad(): number {
    return this.pedidoService.getCantidad(this.producto);
  }

  get subtotal(): number {
    return this.cantidad * this.producto.precio;
  }

  incrementar() {
    this.pedidoService.incrementar(this.producto);
  }

  decrementar() {
    this.pedidoService.decrementar(this.producto);
  }

  cambiarCantidad(valor: string) {
    const cantidad = parseInt(valor, 10);
    if (Number.isNaN(cantidad) || cantidad < 0) return;
    this.pedidoService.setCantidad(this.producto, cantidad);
  }

  quitar() {
    this.pedidoService.setCantidad(this.producto, 0);
  }
}
