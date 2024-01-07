import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppModalContainerComponent } from 'src/app/components/shared/modal/app-modal-container/app-modal-container.component';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';
import swal from 'sweetalert2';
import { CitiesModel } from 'src/app/data/models/sucursales/cities.model'
import { BranchService } from 'src/app/data/services/branches/branch.service';

@Component({
  selector: 'app-city-container',
  templateUrl: './app-city-container.component.html',
  styleUrls: ['./app-city-container.component.scss']
})
export class AppCityContainerComponent implements OnInit{
  public editingCity!: CitiesModel | null;
  public isLoadingVisible: boolean = false;
  public currentPagePaginator: number = 1;
  public isPaginatorVisible: boolean = false;
  public isAddFormVisible: boolean = false;
  public cardNumbers = {
    totales: 0,
    activos: 0,
    inactivos: 0
  }

  public cityList: CitiesModel[] = [];
  private cityListCopy: CitiesModel[] = [];
  constructor(private _cityService: BranchService) {

  }
  public ngOnInit(): void {
    this.loadCities();
    // this.addCategoryFormModal.setModal("prueba de modal desde template", "success")
  }

  public loadCities(): void {
    this.isLoadingVisible = true;
    this.isPaginatorVisible = false;

    this._cityService.getListCity().subscribe((data) => {

      if (data) {
        setTimeout(() => {
          console.log(data);
          this.cityList = data;
          this.cityListCopy = data;

          this.isLoadingVisible = false;
          this.isPaginatorVisible = true;

        }, (2 * 1000));


      }
    });
  }

  public onCancelAddCity(): void {
    this.isAddFormVisible = false;
    // this.reactiveForm.reset();
  }

  public deleteCategory(businessCategoryId: number): void {


    swal.fire({
      title: "¿Borrar sucursal?",
      text: "Esta acción no puede ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Borrar categoría",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Mantener categoría"

    }).then((result) => {
      if (result.isConfirmed) {
        this._cityService.deleteCity(businessCategoryId).subscribe({
          next: () => {
            swal.fire(
              'Sucursal eliminada',
              'El registro ha sido eliminado exitosamente',
              "success"
            );
            this.loadCities();
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }

  editCity(city: CitiesModel) {
    this.editingCity = city;
  }

  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }

  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;

    if (trimedValue !== '') {
      this.cityList = this.cityListCopy.filter(item =>
        item.nameLong.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.cityList = this.cityListCopy;
    }
  }

}
