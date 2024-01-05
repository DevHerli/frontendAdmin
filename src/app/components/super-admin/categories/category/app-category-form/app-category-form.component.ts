import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-form',
  templateUrl: './app-category-form.component.html',
  styleUrls: ['./app-category-form.component.scss']
})
export class AppCategoryFormComponent {

  form: FormGroup;
  titularAlerta: string = 'Su registro se realizo con éxito';

  constructor(private fb: FormBuilder,
    private _categoryService: CategoryService) {
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]]
    })
  }

  addRegister() {
    const add: any = {
      description: this.form.get('description')?.value
    }
    this._categoryService.createNewCategory(add).subscribe(data => {
      swal.fire('Gracias...', this.titularAlerta, 'success');
      this.form.reset();
    }, error => {
      swal.fire('Opss... ocurrio un error', 'Error', 'error');
      console.log(error);
    })

  }

  public resetForm(): void {
    this.form.reset();
    this.form.updateValueAndValidity();
  }

  // public onSubmit(): void {
  //   let parameter: AddCategoryModel = {
  //     descripcion: this.description.value,
  //   };



}
