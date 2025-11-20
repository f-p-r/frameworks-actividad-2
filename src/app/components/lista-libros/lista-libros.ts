import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLibro } from '../card-libro/card-libro';
import { ModalLibro } from '../modal-libro/modal-libro';
import { Libro } from '../../services/libros';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [CommonModule, CardLibro, ModalLibro],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css'
})
export class ListaLibros {
  @Input() titulo = '';
  @Input() libros: Libro[] = [];

  libroSeleccionado: Libro | null = null;

  verDetalle(libro: Libro) {
    // 🔸 Si ya está seleccionado el mismo libro, lo reiniciamos para forzar detección de cambio
    if (this.libroSeleccionado?.id === libro.id) {
      this.libroSeleccionado = null;
      // Reasignamos tras un microtask para que Angular lo detecte como cambio
      queueMicrotask(() => (this.libroSeleccionado = libro));
    } else {
      this.libroSeleccionado = libro;
    }
  }

  cerrarModal() {
    this.libroSeleccionado = null;
  }
}
