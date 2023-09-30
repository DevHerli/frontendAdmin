import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private myAppUrl = 'http://www.apicomerciolocal.somee.com/';
  private myApiUrl = 'api/categoriasComercios/';

  constructor(private http: HttpClient) { }

  getListCategory() : Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteCategory(businessCategoryId : number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl +  businessCategoryId)
  }

  saveCategory(category : any) : Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, category);
  }

  updateCategory(businessCategoryId : number, category : any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + businessCategoryId, category);
  }
}


