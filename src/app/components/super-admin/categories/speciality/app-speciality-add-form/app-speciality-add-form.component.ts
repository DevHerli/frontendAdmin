import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import { SweetAlertService } from 'src/app/data/services/categories/sweet-alert.service';

@Component({
  selector: 'app-speciality-add-form',
  templateUrl: './app-speciality-add-form.component.html',
  styleUrls: ['./app-speciality-add-form.component.scss']
})
export class AppSpecialityAddFormComponent {

  @Output() onFinishForm = new EventEmitter<any>();

  @Input() set originalSubcategory(subcategory: SubcategoryModel) {

    if (subcategory) {
      this._originalSubcategory = subcategory;
    }
  }

  public reactiveForm!: FormGroup;
  public descriptionControl!: AbstractControl

  private _originalSubcategory!: SubcategoryModel;

  constructor(private _categoryService: CategoryService,
    private _formbuilder: FormBuilder,
    private _sweetAlertService: SweetAlertService) {
  }

  ngOnInit(): void {
    this.setReactiveForm();
  }

  public onSubmitAddSubcategory(): void {
    let parameters = {
      active: true,
      description: this.descriptionControl.value,
      user: "CFCLOPEZL",
      dateRegister: new Date(),
      businessCategoryId: this._originalSubcategory.id
    }

    console.log(parameters);
    this._sweetAlertService.showLoading();

    this._categoryService.createNewSubcategory(parameters).subscribe({
      next: (value) => {
        this._sweetAlertService.hideLoading();
        this._sweetAlertService.alertWithIcon("Realizado!", "Nueva subcategoría agregada", "success")
        this.onFinishForm.emit();
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
