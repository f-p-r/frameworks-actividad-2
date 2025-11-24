import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService, LineaPedido } from '../services/pedido';
import { CafeteriaCardProducto } from '../cafeteria-card-producto/cafeteria-card-producto';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cafeteria-checkout',
  standalone: true,
  imports: [CommonModule, CafeteriaCardProducto, ReactiveFormsModule],
  templateUrl: './cafeteria-checkout.html',
  styleUrl: './cafeteria-checkout.css'
})
export class CafeteriaCheckout implements OnInit, OnDestroy {

  checkoutForm!: FormGroup;
  mostrarAvisoSinProductos = false;
  mesas = Array.from({ length: 20 }, (_, i) => i + 1);

  private sub!: Subscription;

  constructor(
    private pedidoService: PedidoService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {

    // Si entra sin productos → aviso
    if (this.items.length === 0) {
      this.mostrarAvisoSinProductos = true;
    }

    // Suscribirse a cambios del carrito
    this.sub = this.pedidoService.cambios$.subscribe(() => {
      if (this.items.length === 0) {
        this.mostrarAvisoSinProductos = true;
      }
    });

    // Formulario reactivo
    this.checkoutForm = this.fb.group({
      entrega: ['cafeteria', Validators.required],
      mesa: [null],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.email],
      telefono: ['']
    }, {
      validators: [control => this.contactoValidator(control)]
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private contactoValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const telefono = control.get('telefono')?.value;
    const entrega = control.get('entrega')?.value;
    const mesa = control.get('mesa')?.value;

    const errores: any = {};

    if (!email && !telefono) errores.contactoRequerido = true;
    if (entrega === 'coworking' && !mesa) errores.mesaRequerida = true;

    return Object.keys(errores).length ? errores : null;
  }

  // Accesores
  get items(): LineaPedido[] {
    return this.pedidoService.getLineas().filter(l => l.cantidad > 0);
  }

  get total(): number {
    return this.pedidoService.getTotalImporte();
  }

  get entregaEsCoworking(): boolean {
    return this.checkoutForm.get('entrega')?.value === 'coworking';
  }

  vaciarPedido() {
    this.pedidoService.vaciar(); // Esto ya dispara cambios$
    this.mostrarAvisoSinProductos = true;
  }

  enviarPedido() {
    if (this.checkoutForm.invalid || this.items.length === 0) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    const { entrega, mesa, nombre, email, telefono } = this.checkoutForm.value;
    const destino = entrega === 'coworking' ? `Mesa coworking ${mesa}` : 'Cafetería';

    alert(
      `Pedido enviado correctamente.\n\n` +
      `Entregar en: ${destino}\n` +
      `Nombre: ${nombre}\n` +
      `Email: ${email || '-'}\n` +
      `Teléfono: ${telefono || '-'}`
    );

    this.pedidoService.vaciar();
    this.router.navigate(['/cafeteria/productos']);
  }

  cerrarAviso() {
    this.mostrarAvisoSinProductos = false;
  }

  irAProductos() {
    this.mostrarAvisoSinProductos = false;
    this.router.navigate(['/cafeteria/productos']);
  }
}
