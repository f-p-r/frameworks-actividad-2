import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda-avanzada',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda-avanzada.html',
  styleUrl: './busqueda-avanzada.css'
})
export class BusquedaAvanzada {
  @Output() buscarAvanzado = new EventEmitter<any>();

  // 🔹 Estado del modal (oculto por defecto)
  visible = false;

  filtros = {
    titulo: '',
    autor: '',
    editorial: '',
    materia: '',
    soloNovedades: false,
    soloMasVendidos: false
  };

  // 🔹 Abre el modal
  abrir() {
    this.visible = true;
  }

  // 🔹 Cierra el modal
  cerrar() {
    this.visible = false;
  }

  // 🔹 Ejecuta la búsqueda avanzada y cierra el modal
  onBuscar() {
    this.buscarAvanzado.emit(this.filtros);
    this.cerrar();
  }
}
