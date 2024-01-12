import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesModel } from '../../models/sucursales/cities.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private readonly URL: string = 'http://www.apicomerciolocal.somee.com/';
  private readonly API_URL: string = 'api/ciudades/';

  constructor(private http: HttpClient) { }

  public getListCity(): Observable<CitiesModel[]> {
    return this.http.get<CitiesModel[]>(this.URL + this.API_URL);
  }

  public deleteCity(id: number): Observable<any> {
    return this.http.delete(this.URL + this.API_URL + id)
  }

  public saveCity(city: Pick<CitiesModel, 'branch' | 'nameShort' | 'nameLong' | 'state' | 'country' | 'user' | 'dateRegister' | 'active' >): Observable<any> {
    return this.http.post(this.URL + this.API_URL, city);
  }

  public updateCity(updateCityParameters: Partial<CitiesModel>): Observable<any> {
    return this.http.put(this.URL + this.API_URL + updateCityParameters.id, updateCityParameters);
  }

}
