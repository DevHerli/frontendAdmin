export class AddCategoryModel {
  tipo_Categoria!: number;
  descripcion!: string;

  constructor(params?: { tipo_Categoria: number; descripcion: string }) {
    if (params) {
      this.tipo_Categoria = params.tipo_Categoria;
      this.descripcion = params.descripcion;
    }
  }
}
