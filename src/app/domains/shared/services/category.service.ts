import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Catergory } from '@shared/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private http =inject(HttpClient)
  
  getAllCategory(){
    return this.http.get<Catergory[]>('https://api.escuelajs.co/api/v1/categories')
  }

}
