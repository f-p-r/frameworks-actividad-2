import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { PreguntasFrecuentes } from '../preguntas-frecuentes/preguntas-frecuentes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [PreguntasFrecuentes]
})
export class Navbar {
  // Eventos para comunicar con App
  @Output() inicio = new EventEmitter<void>();
  @Output() novedades = new EventEmitter<void>();
  @Output() masVendidos = new EventEmitter<void>();

  @ViewChild(PreguntasFrecuentes) preguntas!: PreguntasFrecuentes;

  enlaceActivo: 'inicio' | 'novedades' | 'masVendidos' | 'faq' | 'cuenta' = 'inicio';

  activar(categoria: 'inicio' | 'novedades' | 'masVendidos' | 'faq' | 'cuenta') {
    this.enlaceActivo = categoria;

    switch (categoria) {
      case 'inicio':
        this.inicio.emit();
        break;
      case 'novedades':
        this.novedades.emit();
        break;
      case 'masVendidos':
        this.masVendidos.emit();
        break;
      case 'faq':
        this.abrirPreguntasFrecuentes();
        break;
      default:
        break;
    }
  }

  abrirPreguntasFrecuentes() {
    if (this.preguntas) {
      this.preguntas.abrir();
    }
  }
}
