import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppModalContainerComponent } from 'src/app/components/shared/modal/app-modal-container/app-modal-container.component';
import { CategoryModel } from 'src/app/data/models/category.model';

import { CategoryService } from 'src/app/data/services/categories/category.service';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-container',
  templateUrl: './app-category-container.component.html',
  styleUrls: ['./app-category-container.component.scss'],
})
export class AppCategoryContainerComponent implements OnInit {

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
  private categoryListCopy: CategoryModel[] = [];

  constructor(private _categoryService: CategoryService) {

  }

  public ngOnInit(): void {
    this.loadCategories();
    // this.addCategoryFormModal.setModal("prueba de modal desde template", "success")
  }


  public loadCategories(): void {
    this.isLoadingVisible = true;
    // this.isPaginatorVisible = false;

    // this._categoryService.getListCategory().subscribe((data) => {

    //   if (data) {
    //     setTimeout(() => {
    //       this.categoryList = data;
    //       this.categoryListCopy = data;

    //       this.cardNumbers.totales = this.categoryList.length;
    //       this.cardNumbers.activos = this.categoryList.filter((current: CategoryModel) => {
    //         return current.active
    //       }).length;

    //       this.cardNumbers.inactivos = this.cardNumbers.totales - this.cardNumbers.activos;
    //       this.isLoadingVisible = false;
    //       this.isPaginatorVisible = true;
    //     }, (3 * 1000));


    //   }
    // });
  }

  public onCancelAddCategory(): void {
    this.isAddFormVisible = false;
    // this.reactiveForm.reset();
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

    // this.reactiveForm.patchValue({
    //   description: category.description,
    // });

    const response = this._categoryService.updateCategory(category.businessCategoryId, category.description)
    console.log('respuesta:' + response)

  }


  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }


  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;

    if (trimedValue !== '') {
      this.categoryList = this.categoryListCopy.filter(item =>
        item.description.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.categoryList = this.categoryListCopy;
    }

  }

}
