import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cantidadCarrito = 0;
  titulo = 'electrohub-bt';
  constructor(private carritoService: CarritoService) {
    this.carritoService.cantidadTotal$.subscribe(cantidad => {
      this.cantidadCarrito = cantidad;
    });
  }
}
