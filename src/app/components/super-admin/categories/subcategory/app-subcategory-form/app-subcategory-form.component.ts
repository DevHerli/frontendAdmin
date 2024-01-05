import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-subcategory-form',
  templateUrl: './app-subcategory-form.component.html',
  styleUrls: ['./app-subcategory-form.component.scss']
})
export class AppSubcategoryFormComponent {

  @Input() public set selectedSubcategory(categoryToEdit: SubcategoryModel | null) {

    if (categoryToEdit) {
      this._selectedSubcategory = categoryToEdit;
      this.reactiveForm.patchValue(this._selectedSubcategory);
      this.reactiveForm.enable()
    }
  }

  public get selectedSubcategory(): SubcategoryModel {
    return this._selectedSubcategory;
  }

  private _selectedSubcategory: SubcategoryModel;

  @Output() onFinishForm = new EventEmitter<boolean>();
  public reactiveForm!: FormGroup;
  public descriptionControl!: AbstractControl;
  public activeControl!: AbstractControl;
  private _defaultSubcategoryValue: SubcategoryModel = {
    active: false,
    id: 0,
    dateRegister: new Date(0),
    description: "",
    user: "NULL",
    businessCategoryId: 0
  }
  public switchValue: boolean = false;



  constructor(private _formbuilder: FormBuilder, private _categoryService: CategoryService) {
    this._selectedSubcategory = this._defaultSubcategoryValue;
  }

  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      description: new FormControl(this._selectedSubcategory.description, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      active: new FormControl(this._selectedSubcategory.active, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    })

    this.descriptionControl = this.reactiveForm.controls['description'];
    this.activeControl = this.reactiveForm.controls['active'];

    this.reactiveForm.valueChanges.subscribe(data => console.log(data))

  }

  public resetForm(): void {
    this.reactiveForm.patchValue(this._selectedSubcategory);
    this.reactiveForm.updateValueAndValidity();
  }

  public clearForm(): void {
    this._selectedSubcategory = this._defaultSubcategoryValue;
    this.resetForm();
  }

  public onSwitchValueChange(ev: any) {

    this.activeControl.setValue(ev)
    this.reactiveForm.updateValueAndValidity();
  }

  public updateCategorySubmit(): void {

    const submitParameters = new SubcategoryModel({
      ...this._selectedSubcategory,
      description: this.descriptionControl.value,
      active: this.activeControl.value,
    });

    this._categoryService.updateCategory(submitParameters).subscribe({
      next: (resp) => {
        swal.fire('Realizado!', '¡Categoría actualizada con éxito!', 'success');
        this.clearForm();
        this.onFinishForm.emit(true);
      },

      error: (error: HttpErrorResponse) => {
        swal.fire(`${error.error}`, 'Vuelve a intentarlo', 'error');
        console.log(error.error)
      }
    })

  }


}
