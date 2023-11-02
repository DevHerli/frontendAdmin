import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly URL: string = 'http://www.apicomerciolocal.somee.com/';
  private readonly API_URL: string = 'api/categoriasComercios/';


  constructor(private http: HttpClient) { }

  public getListCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.URL + this.API_URL);
  }

  public deleteCategory(businessCategoryId: number): Observable<any> {
    return this.http.delete(this.URL + this.API_URL + businessCategoryId)
  }

  public saveCategory(category: Pick<CategoryModel, 'active' | 'description' | 'user' | 'dateRegister'>): Observable<any> {
    return this.http.post(this.URL + this.API_URL, category);
  }

  public updateCategory(businessCategoryId: number, description: string): Observable<any> {
    return this.http.put(this.URL + this.API_URL + businessCategoryId, description);
  }
}


