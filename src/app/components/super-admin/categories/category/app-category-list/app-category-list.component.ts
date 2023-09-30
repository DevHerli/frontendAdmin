import { Component } from '@angular/core';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './app-category-list.component.html',
  styleUrls: ['./app-category-list.component.scss']
})
export class AppCategoryListComponent {

  titularAlerta:string='Categoría elminada';

  public listCategories: any[] = [ ];

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this._categoryService.getListCategory().subscribe(data => {
      console.log(data);
      this.listCategories = data;
    }, error => {
      console.log(error);
    })
  }


  delete(businessCategoryId:number){
    this._categoryService.deleteCategory(businessCategoryId).subscribe(data => {
      swal.fire('El registro ha sido eliminado exitosamente',this.titularAlerta, 'error');
      this.obtenerCategorias();
    },error => {
      console.log(error);
    })
  }
}
