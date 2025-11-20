import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiCompra } from '../mi-compra/mi-compra';
import { BusquedaAvanzada } from '../busqueda-avanzada/busqueda-avanzada';

@Component({
  selector: 'app-barra-utilidades',
  standalone: true,
  imports: [CommonModule, FormsModule, MiCompra, BusquedaAvanzada],
  templateUrl: './barra-utilidades.html',
  styleUrl: './barra-utilidades.css'
})
export class BarraUtilidades {
  @Output() buscar = new EventEmitter<any>();

  @ViewChild(MiCompra) miCompra!: MiCompra;
  @ViewChild(BusquedaAvanzada) busquedaAvanzada!: BusquedaAvanzada;

  termino = '';

  // Ejecuta la búsqueda
  onBuscar() {
    this.buscar.emit(this.termino);
  }

  // Abre el modal de búsqueda avanzada
  abrirBusquedaAvanzada() {
    if (this.busquedaAvanzada) {
      this.busquedaAvanzada.abrir();
    }
  }

  // Abre el modal de Mi Compra
  abrirMiCompra() {
    if (this.miCompra) {
      this.miCompra.abrir();
    }
  }
}
