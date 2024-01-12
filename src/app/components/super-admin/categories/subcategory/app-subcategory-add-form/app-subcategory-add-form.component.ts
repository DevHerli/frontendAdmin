import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/data/models/category.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import { SweetAlertService } from 'src/app/data/services/categories/sweet-alert.service';

@Component({
  selector: 'app-subcategory-add-form',
  templateUrl: './app-subcategory-add-form.component.html',
  styleUrls: ['./app-subcategory-add-form.component.scss']
})
export class AppSubcategoryAddFormComponent {

  @Input() set originalCategory(category: CategoryModel) {
    if (category) {
      this._orignalCategory = category;
    }
  }

  public reactiveForm!: FormGroup;
  public descriptionControl!: AbstractControl

  private _orignalCategory!: CategoryModel;


  constructor(private _categoryService: CategoryService,
    private _formbuilder: FormBuilder,
    private _sweetAlertService: SweetAlertService) {

  }

  public onSubmitAddSubcategory(): void {
    let parameters = {
      active: true,
      description: this.descriptionControl.value,
      user: "CFCLOPEZL",
      dateRegister: new Date(),
      businessCategoryId: this._orignalCategory.id
    }

    this._sweetAlertService.showLoading();

    this._categoryService.createNewSubcategory(parameters).subscribe({
      next: (value) => {
        this._sweetAlertService.hideLoading();
        this._sweetAlertService.alertWithIcon("Realizado!", "Nueva categoría agregada", "success")
      },
      error: (err: HttpErrorResponse) => {
        this._sweetAlertService.hideLoading();
        this._sweetAlertService.alertWithIconAndFooter("Oops...", "Hubo un problema al agregar la subcategoría, intenta más tarde", "error", err.message)
      },
    })
  }


  public setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      description: new FormControl(null, [Validators.required])
    })

    this.descriptionControl = this.reactiveForm.controls['description'];
  }

  public resetForm() {
    this.reactiveForm.reset();
    this.reactiveForm.updateValueAndValidity();
  }

}
