import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryService = inject(CategoryService);
  categorias = signal<any[]>([]);

  constructor() {
    this.categoryService.obtenerCategorias().subscribe((data) => {
      this.categorias.set(data);
    });

  }
}
