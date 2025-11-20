import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { BarraUtilidades } from './components/barra-utilidades/barra-utilidades';
import { Carousel } from './components/carousel/carousel';
import { ListaLibros } from './components/lista-libros/lista-libros';
import { Libro, LibrosService } from './services/libros';
import { Landing } from './components/landing/landing';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, BarraUtilidades, Carousel, ListaLibros, Landing, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  vista: 'inicio' | 'libros' = 'inicio'; // vista actual
  titulo = '';                           // solo se muestra en "libros"
  libros: Libro[] = [];
  enCafeteria = false;
  constructor(private librosService: LibrosService, private router: Router) {
    this.router.events.subscribe(() => {
      this.enCafeteria = this.router.url.includes('/cafeteria');
    });
  }

  // ✅ Mostrar pantalla de inicio
  mostrarInicio() {
    this.vista = 'inicio';
    this.titulo = '';
    this.libros = [];
  }

  // ✅ Mostrar lista de libros
  mostrarLibros(titulo: string, lista: Libro[]) {
    this.titulo = titulo;
    this.libros = lista;
    this.vista = 'libros';
  }

  // ✅ Desde Navbar
  onNovedades() {
    this.mostrarLibros('Novedades', this.librosService.getNovedades());
  }

  onMasVendidos() {
    this.mostrarLibros('Más vendidos', this.librosService.getMasVendidos());
  }

  // ✅ Desde barra de utilidades (búsqueda)
  onBuscar(param: any) {
    if (typeof param === 'string') {
      const termino = param.trim();
      if (termino === '') {
        // Si se borra la búsqueda → volver al inicio
        this.mostrarInicio();
      } else {
        this.mostrarLibros(`Resultados para "${termino}"`, this.librosService.buscarLibros(termino));
      }
    } else if (typeof param === 'object' && param !== null) {
      this.mostrarLibros('Resultados de búsqueda avanzada', this.librosService.buscarAvanzado(param));
    }
  }
}
