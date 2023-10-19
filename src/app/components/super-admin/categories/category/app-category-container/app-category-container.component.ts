import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-container',
  templateUrl: './app-category-container.component.html',
  styleUrls: ['./app-category-container.component.scss'],
})
export class AppCategoryContainerComponent {
  public reactiveForm!: FormGroup;

  alertaAdd: string = 'Su registro se realizo con éxito';
  alertaEliminada: string = 'Categoría elminada';
  accion = 'Agregar';
  id: number | undefined;

  public isLoadingVisible: boolean = false;

  public categoryList: any[] = [];

  constructor(private _formbuilder: FormBuilder, private _categoryService: CategoryService) { }


  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      description: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3),])
    })
  }

  public ngOnInit(): void {
    this.setReactiveForm();
    this.loadCategories();
  }


  public onSubmit(): void {
    this._categoryService.saveCategory(this.reactiveForm.value).subscribe({
      next: () => {
        swal.fire('Gracias...', this.alertaAdd, 'success');
        this.loadCategories();
        this.reactiveForm.reset();
      },
      error: () => {
        swal.fire('Opss... ocurrio un error', 'Error', 'error');
      }
    }
    );
  }


  saveRegister() {
    const category: any = {
      description: this.reactiveForm.get('description')?.value,
    };



    if (this.id == undefined) {
      //Add new category
      this._categoryService.saveCategory(category).subscribe(
        (data) => {
          swal.fire('Gracias...', this.alertaAdd, 'success');
          this.loadCategories();
          this.reactiveForm.reset();
        },
        (error) => {
          swal.fire('Opss... ocurrio un error', 'Error', 'error');
          console.log(error);
        }
      );
    } else {
      //Edit category
      this._categoryService.updateCategory(this.id, category).subscribe(
        (data) => {
          this.reactiveForm.reset();
          this.accion = 'Agregar';
          this.id = undefined;
          swal.fire(
            'La categoría se actualizo exitosamente',
            'Registro Actualizado',
            'info'
          );
          this.loadCategories();
        },
        (error) => {
          swal.fire('Opss... ocurrio un error', 'Error', 'error');
          console.log(error);
        }
      );
    }
  }

  public resetForm(): void {
    this.reactiveForm.reset();
    this.reactiveForm.updateValueAndValidity();
  }

  public loadCategories(): void {
    this.isLoadingVisible = true;

    this._categoryService.getListCategory().subscribe((data) => {

      setTimeout(() => {
        this.categoryList = data;
        this.isLoadingVisible = false;
      }, (3 * 1000));

    });
  }


  delete(businessCategoryId: number) {
    this._categoryService.deleteCategory(businessCategoryId).subscribe(
      (data) => {
        swal.fire(
          'El registro ha sido eliminado exitosamente',
          this.alertaEliminada,
          'error'
        );
        this.loadCategories();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  edit(category: any) {
    this.accion = 'Editar';
    this.id = category.businessCategoryId;

    this.reactiveForm.patchValue({
      description: category.description,
    });
  }
}
