import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './app-subcategory-container.component.html',
  styleUrls: ['./app-subcategory-container.component.scss'],
})

export class AppSubcategoryContainerComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public businessCategoryControl!: AbstractControl;
  public descriptionControl!: AbstractControl;


  public alertaAdd: string = 'Su registro se realizo con éxito';
  public alertaEliminada: string = 'Categoría elminada';
  public accion = 'Agregar';
  public id: number | undefined;



  public categoryList: any[] = [];

  constructor(private _formBuilder: FormBuilder, private _categoryService: CategoryService) {
    this._categoryService.getListCategory().subscribe((data) => {
      this.categoryList = data;
    });
  }

  public ngOnInit(): void {
    this.setReactiveform();
  }

  public setReactiveform(): void {
    this.reactiveForm = this._formBuilder.group({
      businessCategoryId: new FormControl('', Validators.required),
      description: new FormControl(null, Validators.required),
    });

    this.businessCategoryControl = this.reactiveForm.controls['businessCategoryId'];
    this.descriptionControl = this.reactiveForm.controls['description'];
  }

  public onSubmit(): void {
    console.log(this.reactiveForm.value);
    // this._categoryService.saveCategory(this.reactiveForm.value)
    // console.log('realizado');
  }

}
