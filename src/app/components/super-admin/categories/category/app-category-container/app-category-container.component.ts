import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-category-container',
  templateUrl: './app-category-container.component.html',
  styleUrls: ['./app-category-container.component.scss']
})
export class AppCategoryContainerComponent {

 
  form : FormGroup;
  alertaAdd:string='Su registro se realizo con éxito';
  alertaEliminada:string='Categoría elminada';
  accion = 'Agregar';
  id: number | undefined;

  public listCategories: any[] = [ ];

  constructor(private fb : FormBuilder,private _categoryService: CategoryService) { 
    this.form = this.fb.group({
      description : ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  saveRegister() {
    const category: any = {
      description : this.form.get('description')?.value
    }

    if(this.id == undefined){
        //Add new category
        this._categoryService.saveCategory(category).subscribe(data =>{
          swal.fire('Gracias...',this.alertaAdd, 'success');  
          this.obtenerCategorias();
          this.form.reset();
        }, error => {
          swal.fire('Opss... ocurrio un error','Error', 'error');
          console.log(error);
        })
    }else {
      //Edit category
      this._categoryService.updateCategory(this.id, category).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        swal.fire('La categoría se actualizo exitosamente','Registro Actualizado', 'info');
        this.obtenerCategorias();
      }, error => {
        swal.fire('Opss... ocurrio un error','Error', 'error');
        console.log(error);
      })
    }

  }

  public resetForm(): void {
    this.form.reset();
    this.form.updateValueAndValidity();
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
      swal.fire('El registro ha sido eliminado exitosamente',this.alertaEliminada, 'error');
      this.obtenerCategorias();
    },error => {
      console.log(error);
    })
  }

  edit(category : any){
    this.accion = 'Editar';
    this.id = category.businessCategoryId;

    this.form.patchValue({
      description: category.description
    })
  }

}
