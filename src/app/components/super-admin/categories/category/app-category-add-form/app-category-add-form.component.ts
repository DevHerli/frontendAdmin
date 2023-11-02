import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-category-add-form',
  templateUrl: './app-category-add-form.component.html',
  styleUrls: ['./app-category-add-form.component.scss']
})
export class AppCategoryAddFormComponent implements OnInit {
  @Output() onFinishForm = new EventEmitter<boolean>();
  public reactiveForm!: FormGroup;
  constructor(private _formbuilder: FormBuilder, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.setReactiveForm();
  }


  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      description: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3),]),
      user: new FormControl('CFCLOPEZL'),
      active: new FormControl(false, [Validators.required]),
    })

  }

  public resetForm(): void {
    this.reactiveForm.reset();
    this.reactiveForm.updateValueAndValidity();
  }

  public onAddCategorySubmit(): void {
    console.log(this.reactiveForm.value)
    this._categoryService.saveCategory(this.reactiveForm.value).subscribe({
      next: () => {
        swal.fire('Gracias...', '¡Categoría agregada con éxito!', 'success');
        this.reactiveForm.reset();
        this.onFinishForm.emit(true);
      },
      error: () => {
        swal.fire('Opss... ocurrio un error', 'Error', 'error');
      }

    });
  }


}
