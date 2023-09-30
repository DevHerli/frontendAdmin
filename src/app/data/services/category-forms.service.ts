import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryModel } from '../models/add-category.model';
import { catchError, throwError } from 'rxjs';
import { AddSubcategoryModel } from '../models/add-subcategory.model';
import { AddSpecialityModel } from '../models/add-speciality.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryFormsService {
  myAppUrl = ""
  
  constructor(private _httpClient: HttpClient) {}

  public insert_addCategory(data: AddCategoryModel): void {
    const url = 'http://www.apicomerciolocal.somee.com/api/categorias';

    this._httpClient.post<AddCategoryModel>(url, data).subscribe((response) => {
      console.log('Respuesta de la petición:', response);
    });
  }

  public insert_addSubcategory(data: AddSubcategoryModel): void {
    const url = 'http://www.apicomerciolocal.somee.com/api/subcategorias';

    this._httpClient
      .post<AddSubcategoryModel>(url, data)
      .subscribe((response) => {
        console.log('Respuesta de la petición:', response);
      });
  }


  public insert_addSpeciality(data: AddSpecialityModel): void {
    const url = 'http://www.apicomerciolocal.somee.com/api/especialidades';

    this._httpClient
      .post<AddSpecialityModel>(url, data)
      .subscribe((response) => {
        console.log('Respuesta de la petición:', response);
      });
  }
}
