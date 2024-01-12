import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SpecialityCategoryModel } from 'src/app/data/models/speciality-category.model copy';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';
import swal from 'sweetalert2';
@Component({
  selector: 'app-speciality-container',
  templateUrl: './app-speciality-container.component.html',
  styleUrls: ['./app-speciality-container.component.scss']
})
export class AppSpecialityContainerComponent implements OnInit {

  @Input() set selectedSubcategory(subcategory: SubcategoryModel) {
    if (subcategory) {
      this._selectedSubcategory = subcategory;
      this.loadSpecialities();
    }
  }

  private _selectedSubcategory!: SubcategoryModel;

  public viewTableDetails: boolean = false;
  public isLoadingVisible: boolean = false;
  public currentPagePaginator: number = 1;
  public isPaginatorVisible: boolean = false;

  public specialityList!: SpecialityCategoryModel[];
  public specialityListCopy!: SpecialityCategoryModel[];
  public editingSpeciality!: SubcategoryModel;
  constructor(private _categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.loadSpecialities();
  }

  public loadSpecialities(): void {
    this.isLoadingVisible = true;
    this.isPaginatorVisible = false;

    this._categoryService.getAllSpecialities().subscribe((data) => {
      if (data) {
        setTimeout(() => {
          console.log(data);
          this.specialityList = data;
          this.specialityListCopy = data;

          this.isLoadingVisible = false;
          this.isPaginatorVisible = true;

        }, (2 * 1000));
      }
    });
  }


  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;
    if (trimedValue !== '') {
      this.specialityList = this.specialityListCopy.filter(item =>
        item.description.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.specialityList = this.specialityListCopy;
    }

  }

  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }

  editSpeciality(speciality: SpecialityCategoryModel) {
    this.editingSpeciality = speciality;
  }

  public deleteSpeciality(specialityId: number): void {
    swal.fire({
      title: "¿Borrar especialidad?",
      text: "Esta acción no puede ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Borrar especialidad",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Cancelar"

    }).then((result) => {
      if (result.isConfirmed) {
        this._categoryService.deleteCategory(specialityId).subscribe({
          next: () => {
            swal.fire(
              'Subcategoría eliminada',
              'El registro ha sido eliminado exitosamente',
              "success"
            );
            // this.loadSubcategories();
          },
          error: (error: HttpErrorResponse) => {
            // this._sweetAlertService.alertWithIconAndFooter("Oops...", "No se pudo eliminar la subcategoría, inténtalo más tarde", "error", error.message)
          }
        });
      }
    });
  }
}
