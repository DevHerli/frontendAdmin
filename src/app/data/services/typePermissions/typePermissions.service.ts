import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypePermissionsModel } from '../../models/typePermissions/typePermissions.model';

@Injectable({
  providedIn: 'root'
})
export class TypePermissionsService {
  private readonly URL: string = 'http://www.apicomerciolocal.somee.com/';
  private readonly API_URL: string = 'api/tipoPermisos/';

  constructor(private http: HttpClient) { }

  public getListTypePermission(): Observable<TypePermissionsModel[]> {
    return this.http.get<TypePermissionsModel[]>(this.URL + this.API_URL);
  }

  public deleteTypePermission(id: number): Observable<any> {
    return this.http.delete(this.URL + this.API_URL + id)
  }

  public saveTypePermission(typePermission: Pick<TypePermissionsModel, 'typePermit' | 'description' | 'dateCreate' | 'user' | 'active' >): Observable<any> {
    return this.http.post(this.URL + this.API_URL, typePermission);
  }

  public updateTypePermission(updateTypePermissionParameters: Partial<TypePermissionsModel>): Observable<any> {
    return this.http.put(this.URL + this.API_URL + updateTypePermissionParameters.id, updateTypePermissionParameters);
  }

}
