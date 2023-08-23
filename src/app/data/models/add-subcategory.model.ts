export class AddSubcategoryModel {
  public tipo_Categoria!: number;
  public tipo_Subcategoria!: number;
  public descripcion!: string;

  constructor(params?: {
    tipo_Categoria: number;
    tipo_Subcategoria: number;
    descripcion: string;
  }) {
    if (params) {
      this.tipo_Categoria = params.tipo_Categoria;
      this.tipo_Subcategoria = params.tipo_Subcategoria;
      this.descripcion = params.descripcion;
    }
  }
}
