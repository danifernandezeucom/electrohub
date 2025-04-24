import {ChangeDetectorRef, Component, OnInit, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductDetailService} from '../../services/product-detail.service';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private productoDetailService = inject(ProductDetailService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private carritoService = inject(CarritoService);

  productoDetail = signal<any | null>(null);

  productSlug!: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productSlug = params.get('slug')!;

      this.productoDetailService.obtenerProductosXSlug(this.productSlug).subscribe((data: any) => {
        this.productoDetail.set(data);
        this.cdr.detectChanges();
      });
    });
  }


  agregarAlCarrito() {
    const producto = this.productoDetail();

    if (!producto) return;

    const input = document.getElementById('cantidad') as HTMLInputElement;
    const cantidad = Number(input.value) || 1;

    const productoParaGuardar = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      cantidad: cantidad
    };

    const carritoActual = JSON.parse(localStorage.getItem('carrito') || '[]');

    const index = carritoActual.findIndex((p: any) => p.id === producto.id);

    if (index >= 0) {
      carritoActual[index].cantidad += cantidad;
    } else {
      carritoActual.push(productoParaGuardar);
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    alert('Producto agregado al carrito!');
    this.carritoService.actualizarCantidad();

  }


}
