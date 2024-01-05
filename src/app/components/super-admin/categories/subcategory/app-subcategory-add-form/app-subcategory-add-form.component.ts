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
    private _swttAlertService: SweetAlertService) {

  }

  public onSubmitAddSubcategory(): void {
    //TODO: Terminar formulario
    let parameters = {
      active:
        description:
      user:
        dateRegister:
      businessCategoryId:
    }

    this._swttAlertService.showLoading();

    this._categoryService.createNewSubcategory(parameters).subscribe({
      next: (value) => {

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
