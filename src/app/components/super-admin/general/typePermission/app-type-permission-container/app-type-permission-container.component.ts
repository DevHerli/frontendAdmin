import { Component, OnInit } from '@angular/core';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';
import swal from 'sweetalert2';
import { TypePermissionsModel } from 'src/app/data/models/typePermissions/typePermissions.model';
import { TypePermissionsService } from 'src/app/data/services/typePermissions/typePermissions.service';

@Component({
  selector: 'app-type-permission-container',
  templateUrl: './app-type-permission-container.component.html',
  styleUrls: ['./app-type-permission-container.component.scss']
})
export class AppTypePermissionContainerComponent implements OnInit {
  public editingTypePermission!: TypePermissionsModel | null;
  public isLoadingVisible: boolean = false;
  public currentPagePaginator: number = 1;
  public isPaginatorVisible: boolean = false;
  public isAddFormVisible: boolean = false;
  public cardNumbers = {
    totales: 0,
    activos: 0,
    inactivos: 0
  }

  public typePermissionList: TypePermissionsModel[] = [];
  private typePermissionListCopy: TypePermissionsModel[] = [];
  constructor(private _typePermissionsService: TypePermissionsService) {  }

  public ngOnInit(): void {
    this.loadTypePermissions();
    // this.addCategoryFormModal.setModal("prueba de modal desde template", "success")
  }


  
  public loadTypePermissions(): void {
    this.isLoadingVisible = true;
    this.isPaginatorVisible = false;

    this._typePermissionsService.getListTypePermission().subscribe((data) => {

      if (data) {
        setTimeout(() => {
          console.log(data);
          this.typePermissionList = data;
          this.typePermissionListCopy = data;

          this.isLoadingVisible = false;
          this.isPaginatorVisible = true;

        }, (2 * 1000));


      }
    });
  }


  public onCancelAddTypePermissions(): void {
    this.isAddFormVisible = false;
    // this.reactiveForm.reset();
  }

  public deleteTypePermission(typeComissionId: number): void {
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
        this._typePermissionsService.deleteTypePermission(typeComissionId).subscribe({
          next: () => {
            swal.fire(
              'Tipo permiso eliminado',
              'El registro ha sido eliminado exitosamente',
              "success"
            );
            this.loadTypePermissions();
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }

  editTypePermission(typePermission: TypePermissionsModel) {
    this.editingTypePermission = typePermission;
  }

  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }

  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;

    if (trimedValue !== '') {
      this.typePermissionList = this.typePermissionListCopy.filter(item =>
        item.description.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.typePermissionList = this.typePermissionListCopy;
    }
  }


}
