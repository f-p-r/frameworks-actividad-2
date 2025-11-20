import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pregunta {
  id: number;
  titulo: string;
  respuesta: string;
  abierta?: boolean;
}

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntas-frecuentes.html',
  styleUrl: './preguntas-frecuentes.css'
})
export class PreguntasFrecuentes {
  visible = false;

  preguntas: Pregunta[] = [
    {
      id: 1,
      titulo: '¿Cómo puedo registrarme?',
      respuesta: 'Puedes registrarte en la sección "Mi cuenta" de la página.',
      abierta: true
    },
    {
      id: 2,
      titulo: '¿Cuánto tardan en realizarse los envíos si hay stock?',
      respuesta:
        'De uno a dos días para repartos en la península, entre tres y cinco días para Baleares, y de cinco a siete días para Canarias y Ceuta y Melilla.'
    },
    {
      id: 3,
      titulo: '¿Tienen libros electrónicos en el catálogo?',
      respuesta:
        'Actualmente no, pero estamos trabajando para incluirlos en el futuro.'
    }
  ];

  abrir() {
    this.visible = true;
  }

  cerrar() {
    this.visible = false;
  }

  toggle(p: Pregunta) {
    p.abierta = !p.abierta;
  }
}
