import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CategoryModel } from 'src/app/data/models/category.model';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import { SweetAlertService } from 'src/app/data/services/categories/sweet-alert.service';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';
import swal from 'sweetalert2';
@Component({
  selector: 'app-subcategory-container',
  templateUrl: './app-subcategory-container.component.html',
  styleUrls: ['./app-subcategory-container.component.scss'],
})

export class AppSubcategoryContainerComponent implements OnInit {

  @Output() onSelectedSubcategory = new EventEmitter<SubcategoryModel>();

  @Input() set selectedCategory(category: CategoryModel) {
    if (category) {
      this._selectedCategory = category;
      this.loadSubcategories();
    }
  }

  public get selectedCategory(): CategoryModel {
    return this._selectedCategory;
  }


  public viewTableDetails: boolean = false;
  public isLoadingVisible: boolean = false;
  public currentPagePaginator: number = 1;
  public isPaginatorVisible: boolean = false;

  public reactiveForm!: FormGroup;
  public businessCategoryControl!: AbstractControl;
  public descriptionControl!: AbstractControl;

  public subcategoryList: SubcategoryModel[] = [];
  public subcategoryListCopy: SubcategoryModel[] = [];

  private _selectedCategory!: CategoryModel;
  public editingSubcategory!: SubcategoryModel;

  constructor(private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _sweetAlertService: SweetAlertService) {

  }

  public ngOnInit(): void {
    this.setReactiveform();
  }

  public setReactiveform(): void {
    this.reactiveForm = this._formBuilder.group({
      businessCategoryId: new FormControl('', Validators.required),
      description: new FormControl(null, Validators.required),
    });

    this.businessCategoryControl = this.reactiveForm.controls['businessCategoryId'];
    this.descriptionControl = this.reactiveForm.controls['description'];
  }

  public onSubmit(): void {
  }


  public deleteSubcategory(businessCategoryId: number): void {
    swal.fire({
      title: "¿Borrar subcategoría?",
      text: "Esta acción no puede ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Borrar categoría",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Mantener categoría"

    }).then((result) => {
      if (result.isConfirmed) {
        this._categoryService.deleteCategory(businessCategoryId).subscribe({
          next: () => {
            swal.fire(
              'Subcategoría eliminada',
              'El registro ha sido eliminado exitosamente',
              "success"
            );
            this.loadSubcategories();
          },
          error: (error: HttpErrorResponse) => {
            this._sweetAlertService.alertWithIconAndFooter("Oops...", "No se pudo eliminar la subcategoría, inténtalo más tarde", "error", error.message)
          }
        });
      }
    });
  }



  editSubcategory(subcategory: SubcategoryModel) {
    this.editingSubcategory = subcategory;
    // const response = this._categoryService.updateCategory(category.businessCategoryId, category.description)
  }


  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }


  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;
    if (trimedValue !== '') {
      this.subcategoryList = this.subcategoryListCopy.filter(item =>
        item.description.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.subcategoryList = this.subcategoryListCopy;
    }

  }



  public selectSubcategory(subcategory: SubcategoryModel): void {
    this.onSelectedSubcategory.emit(subcategory);
  }

  public loadSubcategories(): void {
    this.isLoadingVisible = true;
    this.isPaginatorVisible = false;

    this._categoryService.getSubcategoriesByCategoryId(this._selectedCategory.id).subscribe((data) => {

      if (data) {
        setTimeout(() => {
          this.subcategoryList = data;
          this.subcategoryListCopy = data;

          this.isLoadingVisible = false;
          this.isPaginatorVisible = true;

        }, (2 * 1000));


      }
    });
  }




}
