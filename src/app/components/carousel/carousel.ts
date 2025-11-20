import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  // Lista de imágenes del carrusel
  imagenes = [
  { src: 'img/carrusel/1.jpg', alt: 'Imagen 1', enlace: 'https://www.google.com' },
  { src: 'img/carrusel/2.jpg', alt: 'Imagen 2', enlace: 'https://www.google.com' },
  { src: 'img/carrusel/3.jpg', alt: 'Imagen 3', enlace: 'https://www.google.com' }
  ];
}
