import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carrito: any[] = [];
  carritoService = inject(CarritoService);

  ngOnInit() {
    this.leerCarrito();
  }

  leerCarrito() {
    const data = localStorage.getItem('carrito');
    this.carrito = data ? JSON.parse(data) : [];
  }

  get totalGeneral(): number {
    return this.carrito.reduce((acc, item) => acc + item.cantidad * item.price, 0);
  }

  finalizarCompra() {
    localStorage.clear();
    this.carrito = [];
    alert('¡Compra finalizada! Gracias por tu pedido.');
    this.carritoService.actualizarCantidad();
  }
}
