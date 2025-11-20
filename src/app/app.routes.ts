import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';

import { CafeteriaLayout } from './cafeteria/cafeteria-layout/cafeteria-layout';
import { CafeteriaLanding } from './cafeteria/cafeteria-landing/cafeteria-landing';
import { CafeteriaProductos } from './cafeteria/cafeteria-productos/cafeteria-productos';
import { CafeteriaCheckout } from './cafeteria/cafeteria-checkout/cafeteria-checkout';

export const routes: Routes = [
  { path: '', component: Landing },
  {
    path: 'cafeteria',
    component: CafeteriaLayout,
    children: [
      { path: '', component: CafeteriaLanding },          // /cafeteria
      { path: 'productos', component: CafeteriaProductos }, // /cafeteria/productos
      { path: 'checkout', component: CafeteriaCheckout }    // /cafeteria/checkout
    ]
  }
];
