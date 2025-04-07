import {Component, inject, signal} from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
  categoryService = inject(CategoryService);
  categorias = signal<any[]>([]);

  constructor() {

    this.categoryService.obtenerCategorias().subscribe((data) => {
      this.categorias.set(data);

    });
  }
}
