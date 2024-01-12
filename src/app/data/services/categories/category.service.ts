import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { SubcategoryModel } from '../../models/subcategory.model';
import { SpecialityCategoryModel } from '../../models/speciality-category.model copy';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly URL: string = 'http://www.apicomerciolocal.somee.com/';
  private readonly API_URL: string = 'api/categoriasComercios/';


  constructor(private http: HttpClient) { }


  //Categories methods
  public getListCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.URL + this.API_URL);
  }

  public deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.URL + this.API_URL + id)
  }

  public createNewCategory(category: Pick<CategoryModel, 'active' | 'description' | 'user' | 'dateRegister'>): Observable<any> {
    return this.http.post(this.URL + this.API_URL, category);
  }

  public updateCategory(updateCategoryParameters: CategoryModel): Observable<any> {
    return this.http.put(this.URL + this.API_URL + updateCategoryParameters.id, updateCategoryParameters);
  }

  //Subcategory Methods
  public getAllSubcategories(): Observable<SubcategoryModel[]> {
    return this.http.get<SubcategoryModel[]>(this.URL + this.API_URL);
  }

  public getSubcategoriesByCategoryId(idCategory: number): Observable<SubcategoryModel[]> {
    const params = {
      categoria: idCategory,
    };
    return this.http.get<SubcategoryModel[]>(this.URL + 'api/subcategoriasComercios/filtrarPorCategoria', { params });
  }

  public createNewSubcategory(newSubcategory: Pick<SubcategoryModel, 'active' | 'description' | 'user' | 'dateRegister' | "businessCategoryId">): Observable<any> {
    return this.http.post(this.URL + "api/subcategoriasComercios", newSubcategory);
  }

  public updateSubcategory(updateSubctegoryParameters: SubcategoryModel): Observable<any> {
    return this.http.put(this.URL + 'api/subcategoriasComercios/' + updateSubctegoryParameters.id, updateSubctegoryParameters);
  }



  //Speciality Methods
  public getAllSpecialities(): Observable<SpecialityCategoryModel[]> {
    return this.http.get<SpecialityCategoryModel[]>(this.URL + 'api/EspecialidadesComercios');
  }

}


