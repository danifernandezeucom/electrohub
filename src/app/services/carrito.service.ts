import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cantidadTotalSubject = new BehaviorSubject<number>(this.obtenerCantidadInicial());
  cantidadTotal$ = this.cantidadTotalSubject.asObservable();

  private obtenerCantidadInicial(): number {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    return carrito.reduce((acc: number, item: any) => acc + item.cantidad, 0);
  }

  actualizarCantidad() {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const total = carrito.reduce((acc: number, item: any) => acc + item.cantidad, 0);
    this.cantidadTotalSubject.next(total);
  }
}
