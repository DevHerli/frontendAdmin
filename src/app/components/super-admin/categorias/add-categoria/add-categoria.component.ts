import { HttpClient } from '@angular/common/http';
import { parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  AbstractControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddCategoryModel } from 'src/app/data/models/add-category.model';
import { CategoryFormsService } from 'src/app/data/services/category-forms.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss'],
})
export class AddCategoriaComponent implements OnInit {
  //#region rectiveForm and abstract Controls
  public formGroup!: FormGroup;
  public typeCategoryControl!: AbstractControl;
  public nameCategoryControl!: AbstractControl;
  //#endregion

  //#region variables
  public isDisabledSaveButton: boolean = true;
  //#endregion

  constructor(
    private _formbuilder: FormBuilder,
    private _categoryFormsServices: CategoryFormsService
  ) {}

  ngOnInit(): void {
    this.setReactiveForm();
  }

  private setReactiveForm(): void {
    this.formGroup = this._formbuilder.group({
      typeCategoryId: new FormControl<number>(
        1,
        Validators.compose([Validators.required, Validators.min(1)])
      ),
      nameCategoryId: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });

    this.typeCategoryControl = this.formGroup.controls['typeCategoryId'];
    this.nameCategoryControl = this.formGroup.controls['nameCategoryId'];

    this.formGroup.valueChanges.subscribe(() => {
      this.isDisabledSaveButton = !this.formGroup.valid;
    });
  }

  public resetForm(): void {
    this.formGroup.reset();
    this.formGroup.updateValueAndValidity();
  }

  public onSubmit(): void {
    let parameter: AddCategoryModel = {
      tipo_Categoria: this.typeCategoryControl.value,
      descripcion: this.nameCategoryControl.value,
    };

    // console.log(parameter);

    this._categoryFormsServices.insert_addCategory(parameter);
  }
}
