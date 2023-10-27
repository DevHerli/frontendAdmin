import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/data/models/category.model';

import { CategoryService } from 'src/app/data/services/categories/category.service';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-container',
  templateUrl: './app-category-container.component.html',
  styleUrls: ['./app-category-container.component.scss'],
})
export class AppCategoryContainerComponent {
  public reactiveForm!: FormGroup;

  alertaEliminada: string = 'Categoría elminada';
  accion = 'Agregar';
  id: number | undefined;

  public isLoadingVisible: boolean = false;
  public currentPagePaginator: number = 1;
  public isPaginatorVisible: boolean = false;
  public isAddFormVisible: boolean = false;
  public cardNumbers = {
    totales: 0,
    activos: 0,
    inactivos: 0
  }

  public categoryList: CategoryModel[] = [];
  public categoryListCopy: CategoryModel[] = [];

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


  public onAddCategorySubmit(): void {
    this._categoryService.saveCategory(this.reactiveForm.value).subscribe({
      next: () => {
        swal.fire('Gracias...', '¡Categoría agregada con éxito!', 'success');
        this.loadCategories();
        this.reactiveForm.reset();
        this.isAddFormVisible = false;
      },
      error: () => {
        swal.fire('Opss... ocurrio un error', 'Error', 'error');
      }
    });


  }

  public resetForm(): void {
    this.reactiveForm.reset();
    this.reactiveForm.updateValueAndValidity();
  }

  public loadCategories(): void {
    this.isLoadingVisible = true;
    this.isPaginatorVisible = false;

    this._categoryService.getListCategory().subscribe((data) => {

      if (data) {
        setTimeout(() => {
          this.categoryList = data;
          this.categoryListCopy = data;
          // console.log(this.categoryList);

          this.cardNumbers.totales = this.categoryList.length;
          this.cardNumbers.activos = this.categoryList.filter((current: CategoryModel) => {
            return current.active
          }).length;

          this.cardNumbers.inactivos = this.cardNumbers.totales - this.cardNumbers.activos;
          this.isLoadingVisible = false;
          this.isPaginatorVisible = true;
        }, (1 * 1000));


      }
    });
  }

  public onCancelAddCategory(): void {
    this.isAddFormVisible = false;
    this.reactiveForm.reset();
  }

  public deleteCategory(businessCategoryId: number): void {
    this._categoryService.deleteCategory(businessCategoryId).subscribe({
      next: () => {
        swal.fire(
          'El registro ha sido eliminado exitosamente',
          'Categoría eliminada',
          'error'
        );
        this.loadCategories();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



  editCategory(category: CategoryModel) {

    this.accion = 'Editar';
    this.id = category.businessCategoryId;

    this.reactiveForm.patchValue({
      description: category.description,
    });

    const response = this._categoryService.updateCategory(category.businessCategoryId, category.description)
    console.log('respuesta:' + response)

  }


  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }


  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;
    console.log(trimedValue);

    if (trimedValue !== '') {
      this.categoryListCopy = this.categoryList.filter(item =>
        item.description.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.categoryListCopy = this.categoryList;
    }

  }

}
