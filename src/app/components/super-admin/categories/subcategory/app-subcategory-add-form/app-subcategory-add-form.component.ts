import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/data/models/category.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import { SweetAlertService } from 'src/app/data/services/categories/sweet-alert.service';

@Component({
  selector: 'app-subcategory-add-form',
  templateUrl: './app-subcategory-add-form.component.html',
  styleUrls: ['./app-subcategory-add-form.component.scss']
})
export class AppSubcategoryAddFormComponent implements OnInit {

  @Output() onFinishForm = new EventEmitter<any>();

  @Input() set originalCategory(category: CategoryModel) {

    if (category) {
      this._originalCategory = category;
    }

  }

  public reactiveForm!: FormGroup;
  public descriptionControl!: AbstractControl

  private _originalCategory!: CategoryModel;


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
      businessCategoryId: this._originalCategory.id
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
