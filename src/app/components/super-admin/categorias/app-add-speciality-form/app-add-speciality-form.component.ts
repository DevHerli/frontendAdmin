import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddSpecialityModel } from 'src/app/data/models/add-speciality.model';
import { CategoryFormsService } from 'src/app/data/services/category-forms.service';

@Component({
  selector: 'app-add-speciality-form',
  templateUrl: './app-add-speciality-form.component.html',
  styleUrls: ['./app-add-speciality-form.component.scss'],
})
export class AppAddSpecialityFormComponent {
  //#region rectiveForm and abstract Controls
  public formGroup!: FormGroup;
  public typeCategoryControl!: AbstractControl;
  public typeSubcategoryControl!: AbstractControl;
  public typeSpecialityControl!: AbstractControl;
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
      typeSpecialityId: new FormControl(
        1,
        Validators.compose([Validators.required, Validators.min(1)])
      ),
      typeCategoryId: new FormControl(
        1,
        Validators.compose([Validators.required, Validators.min(1)])
      ),
      typeSubcategoryId: new FormControl(
        1,
        Validators.compose([Validators.required, Validators.min(1)])
      ),
      nameCategoryId: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });

    this.typeSpecialityControl = this.formGroup.controls['typeSpecialityId'];
    this.typeCategoryControl = this.formGroup.controls['typeCategoryId'];
    this.typeSubcategoryControl = this.formGroup.controls['typeSubcategoryId'];
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
    let parameter: AddSpecialityModel = {
      tipo_Especialidad: this.typeSpecialityControl.value,
      tipo_Categoria: this.typeCategoryControl.value,
      tipo_Subcategoria: this.typeSubcategoryControl.value,
      descripcion: this.nameCategoryControl.value,
    };

    this._categoryFormsServices.insert_addSpeciality(parameter);
  }
}
