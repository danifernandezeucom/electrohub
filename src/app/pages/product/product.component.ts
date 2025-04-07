import { Component, inject, signal, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoriesComponent } from '../../components/categories/categories.component';
@Component({
  selector: 'app-product',
  imports: [CategoriesComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productoService = inject(ProductService);
  productos = signal<any[]>([]);
  precioAleatorio: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.precioAleatorio = this.generarPrecioAleatorio();
    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos.set(data);
      this.cdr.detectChanges();
    });
  }

  // Genera un número aleatorio entre 50 y 100
  generarPrecioAleatorio(): number {
    return Math.floor(Math.random() * 51) + 50;
  }
}
