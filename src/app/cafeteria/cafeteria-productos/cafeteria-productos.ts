import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../services/productos';
import { CafeteriaCardProducto } from '../cafeteria-card-producto/cafeteria-card-producto';

@Component({
  selector: 'app-cafeteria-productos',
  standalone: true,
  imports: [CommonModule, CafeteriaCardProducto],
  templateUrl: './cafeteria-productos.html',
  styleUrl: './cafeteria-productos.css'
})
export class CafeteriaProductos implements OnInit {

  tipos: { id: string; nombre: string }[] = [];
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.tipos = this.productosService.getTipos();
    this.productos = this.productosService.getProductos();
  }

  getProductosPorTipo(tipoId: string): Producto[] {
    return this.productos.filter(p => p.tipo === tipoId);
  }
}
