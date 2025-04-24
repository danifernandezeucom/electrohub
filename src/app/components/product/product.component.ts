import {ChangeDetectorRef, Component, inject, signal} from '@angular/core';

import {ProductService} from '../../services/product.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productoService = inject(ProductService);
  productos = signal<any[]>([]);


  constructor(private cdr: ChangeDetectorRef) {

    this.productoService.obtenerProductos().subscribe((data: any) => {
      this.productos.set(data);
      this.cdr.detectChanges();
    });
  }



}
