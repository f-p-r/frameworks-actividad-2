import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  tipo: 'bebidas' | 'snacks' | 'platos' | 'bocadillos' | 'hamburguesas' | 'tapas';
  descripcion: string;
  precio: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosService {

  /** Tipos de productos (id interno + nombre visible) */
  tipos = [
    { id: 'bebidas', nombre: 'Bebidas' },
    { id: 'snacks', nombre: 'Snacks' },
    { id: 'platos', nombre: 'Platos' },
    { id: 'bocadillos', nombre: 'Bocadillos' },
    { id: 'hamburguesas', nombre: 'Hamburguesas' },
    { id: 'tapas', nombre: 'Tapas' }
  ];

  private productos: Producto[] = [
    // --- BEBIDAS ---
    {
      id: 0,
      nombre: 'Café Espresso',
      tipo: 'bebidas',
      descripcion: 'Un intenso espresso preparado con mezcla arábica. Ideal para comenzar el día.',
      precio: 1.40
    },
    {
      id: 1,
      nombre: 'Capuccino',
      tipo: 'bebidas',
      descripcion: 'Café con leche cremada y un toque de cacao por encima.',
      precio: 1.90
    },
    {
      id: 2,
      nombre: 'Té Negro',
      tipo: 'bebidas',
      descripcion: 'Té negro infusionado con aroma natural. Perfecto para una pausa tranquila.',
      precio: 1.50
    },
    {
      id: 3,
      nombre: 'Zumo Natural de Naranja',
      tipo: 'bebidas',
      descripcion: 'Zumo recién exprimido, rico en vitaminas y muy refrescante.',
      precio: 2.50
    },

    // --- SNACKS ---
    {
      id: 4,
      nombre: 'Croissant de Mantequilla',
      tipo: 'snacks',
      descripcion: 'Crujiente croissant artesanal elaborado con mantequilla auténtica.',
      precio: 1.20
    },
    {
      id: 5,
      nombre: 'Muffin de Chocolate',
      tipo: 'snacks',
      descripcion: 'Esponjoso muffin con trocitos de chocolate fundido.',
      precio: 1.80
    },
    {
      id: 6,
      nombre: 'Barrita de Cereales',
      tipo: 'snacks',
      descripcion: 'Barrita energética de miel y avena. Ideal para tomar entre horas.',
      precio: 1.00
    },

    // --- PLATOS ---
    {
      id: 7,
      nombre: 'Ensalada César',
      tipo: 'platos',
      descripcion: 'Deliciosa ensalada con pollo, parmesano, picatostes y salsa césar casera.',
      precio: 6.50
    },
    {
      id: 8,
      nombre: 'Pasta Boloñesa',
      tipo: 'platos',
      descripcion: 'Pasta fresca acompañada de salsa boloñesa tradicional.',
      precio: 7.20
    },
    {
      id: 9,
      nombre: 'Arroz con Verduras',
      tipo: 'platos',
      descripcion: 'Arroz salteado con verduras frescas de temporada.',
      precio: 6.90
    },

    // --- BOCADILLOS ---
    {
      id: 10,
      nombre: 'Bocadillo de Jamón Serrano',
      tipo: 'bocadillos',
      descripcion: 'Pan recién hecho con jamón serrano de calidad superior.',
      precio: 3.50
    },
    {
      id: 11,
      nombre: 'Bocadillo de Tortilla',
      tipo: 'bocadillos',
      descripcion: 'Clásico bocadillo de tortilla española jugosa.',
      precio: 3.20
    },

    // --- HAMBURGUESAS ---
    {
      id: 12,
      nombre: 'Hamburguesa Clásica',
      tipo: 'hamburguesas',
      descripcion: 'Hamburguesa de ternera con queso cheddar, lechuga, tomate y salsa especial.',
      precio: 7.90
    },
    {
      id: 13,
      nombre: 'Hamburguesa Vegetariana',
      tipo: 'hamburguesas',
      descripcion: 'Hamburguesa de verduras grilladas con pan integral.',
      precio: 7.40
    },

    // --- TAPAS ---
    {
      id: 14,
      nombre: 'Patatas Bravas',
      tipo: 'tapas',
      descripcion: 'Patatas doradas acompañadas de salsa brava casera.',
      precio: 3.90
    },
    {
      id: 15,
      nombre: 'Tortilla de Patatas',
      tipo: 'tapas',
      descripcion: 'Porción de tortilla española tradicional.',
      precio: 3.20
    },
    {
      id: 16,
      nombre: 'Calamares Fritos',
      tipo: 'tapas',
      descripcion: 'Anillas de calamar rebozadas y fritas en aceite suave.',
      precio: 4.80
    },

    // --- EXTRA PRODUCTOS (para variedad) ---
    {
      id: 17,
      nombre: 'Smoothie de Fresa y Plátano',
      tipo: 'bebidas',
      descripcion: 'Batido natural de fruta fresca. Ideal para refrescarse.',
      precio: 3.50
    },
    {
      id: 18,
      nombre: 'Tarta de Queso',
      tipo: 'snacks',
      descripcion: 'Porción casera de tarta de queso cremosa.',
      precio: 2.90
    },
    {
      id: 19,
      nombre: 'Empanada Argentina',
      tipo: 'snacks',
      descripcion: 'Empanada tradicional de carne y especias.',
      precio: 2.20
    }
  ];

  constructor() {}

  getProductos(): Producto[] {
    return this.productos;
  }

  getPorTipo(tipo: Producto['tipo']): Producto[] {
    return this.productos.filter(p => p.tipo === tipo);
  }

  getProducto(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  /** Devuelve la URL de la imagen asociada al producto */
  getImagen(producto: Producto | number): string {
    const id = typeof producto === 'number' ? producto : producto.id;
    return `img/cafeteria/${id}.jpg`;
  }

  /** Devuelve los tipos de producto */
  getTipos() {
    return this.tipos;
  }
}
