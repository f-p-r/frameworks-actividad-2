import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraService, ItemCompra } from '../../services/compra';
import { PrecioEuroPipe } from '../../pipes/precio-euro-pipe';

@Component({
  selector: 'app-mi-compra',
  standalone: true,
  imports: [CommonModule, PrecioEuroPipe],
  templateUrl: './mi-compra.html',
  styleUrl: './mi-compra.css'
})
export class MiCompra implements OnInit {
  items: ItemCompra[] = [];
  total = 0;
  visible = false; // controla si el modal está abierto

  constructor(private compraService: CompraService) {}

  ngOnInit() {
    this.actualizar();
  }

  abrir() {
    this.visible = true;
    this.actualizar();
  }

  cerrar() {
    this.visible = false;
  }

  actualizar() {
    this.items = this.compraService.getItems();
    this.total = this.compraService.getTotal();
  }

  eliminar(id: number) {
    this.compraService.quitarLibro(id);
    this.actualizar();
  }

  cambiarCantidad(id: number, valor: string) {
    const cantidad = parseInt(valor, 10);
    if (cantidad > 0) {
      this.compraService.actualizarCantidad(id, cantidad);
      this.actualizar();
    }
  }

  aplicarCompra() {
    alert('Compra tramitada correctamente.');
    this.compraService.vaciar();
    this.actualizar();
    this.cerrar();
  }
}
