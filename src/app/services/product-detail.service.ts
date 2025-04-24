import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/products/slug/';

  constructor(private http: HttpClient) {
  }

  obtenerProductosXSlug(slug: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + slug);
  }
}
