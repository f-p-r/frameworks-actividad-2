import { Component, computed } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PedidoService } from '../services/pedido';

@Component({
  selector: 'app-cafeteria-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cafeteria-navbar.html',
  styleUrls: ['./cafeteria-navbar.css']
})
export class CafeteriaNavbar {

  totalUnidades = computed(() => this.pedidoService.totalUnidades());

  mostrarAviso = false;

  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  irACompletarPedido(event: Event) {

    if (this.pedidoService.totalUnidades() === 0) {
      event.preventDefault();
      this.mostrarAviso = true;
      return;
    }

    this.router.navigate(['/cafeteria/checkout']);
  }

  cerrarAviso() {
    this.mostrarAviso = false;
  }

  irAProductos() {
    this.mostrarAviso = false;
    this.router.navigate(['/cafeteria/productos']);
  }
}
