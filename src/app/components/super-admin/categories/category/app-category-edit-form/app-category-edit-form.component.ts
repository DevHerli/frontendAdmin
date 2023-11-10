import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/data/models/category.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-edit-form',
  templateUrl: './app-category-edit-form.component.html',
  styleUrls: ['./app-category-edit-form.component.scss']
})
export class AppCategoryEditFormComponent {

  @Input() public set selectedCategory(categoryToEdit: CategoryModel | null) {

    if (categoryToEdit) {
      this._selectedCategory = categoryToEdit;
      this.reactiveForm.enable()
    }
  }

  public get selectedCategory(): CategoryModel {
    return this._selectedCategory;
  }

  private _selectedCategory: CategoryModel;

  @Output() onFinishForm = new EventEmitter<boolean>();
  public reactiveForm!: FormGroup;
  public descriptionControl!: AbstractControl;
  public activeControl!: AbstractControl;
  private _defaultCategoryValue: CategoryModel = {
    active: false,
    id: 0,
    dateRegister: new Date(0),
    description: "",
    user: "NULL"
  }

  constructor(private _formbuilder: FormBuilder, private _categoryService: CategoryService) {
    this._selectedCategory = this._defaultCategoryValue;
  }

  ngOnInit(): void {
    this.setReactiveForm();
  }


  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      description: new FormControl(this._selectedCategory.description, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      active: new FormControl(this._selectedCategory.active, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    })

    this.descriptionControl = this.reactiveForm.controls['description'];
    this.activeControl = this.reactiveForm.controls['active'];
  }

  public resetForm(): void {
    this.reactiveForm.patchValue(this._selectedCategory);
    this.reactiveForm.updateValueAndValidity();
  }


  public updateCategorySubmit(): void {

    const submitParameters: Pick<CategoryModel, 'description' | 'user' | 'active' | 'dateRegister'> = {
      description: this.descriptionControl.value,
      user: "CFCLOPEZL",
      active: true,
      dateRegister: new Date()
    }

    // const response = this._categoryService.updateCategory(category.businessCategoryId, category.description)


    // this._categoryService.saveCategory(submitParameters).subscribe({
    //   next: (resp) => {
    //     console.log(resp);
    //     swal.fire('Gracias...', '¡Categoría agregada con éxito!', 'success');
    //     this.reactiveForm.reset();
    //     this.onFinishForm.emit(true);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     swal.fire(`${error.error}`, 'Vuelve a intentarlo', 'error');
    //     console.log(error)
    //   }

    // });
  }




}
