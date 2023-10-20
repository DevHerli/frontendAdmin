import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private myAppUrl = 'http://www.apicomerciolocal.somee.com/';
  private myApiUrl = 'api/categoriasComercios/';

  constructor(private http: HttpClient) { }

  public getListCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.myAppUrl + this.myApiUrl);
  }

  public deleteCategory(businessCategoryId: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + businessCategoryId)
  }

  public saveCategory(category: CategoryModel): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, category);
  }

  public updateCategory(businessCategoryId: number, description: string): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + businessCategoryId, description);
  }
}


