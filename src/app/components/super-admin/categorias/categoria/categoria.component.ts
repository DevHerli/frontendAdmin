import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  listCategories: any[] = [
    {Id: '1', tipo_Categoria: '01', descripcion:'Salud' },
    {Id: '2', tipo_Categoria: '02', descripcion:'Alimentos' },
  ];

}
