import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './app-subcategory-container.component.html',
  styleUrls: ['./app-subcategory-container.component.scss']
})
export class AppSubcategoryContainerComponent {


  form : FormGroup;
  alertaAdd:string='Su registro se realizo con éxito';
  alertaEliminada:string='Categoría elminada';
  accion = 'Agregar';
  id: number | undefined;

  public listCategories: any[] = [ ];

  constructor(private fb : FormBuilder,private _categoryService: CategoryService) { 
    this.form = this.fb.group({

    })
  }



  }



