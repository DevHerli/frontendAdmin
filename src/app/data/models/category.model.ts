export class CategoryModel {
  public businessCategoryId!: number;
  public description!: string;

  constructor(params?: { businessCategoryId: number; description: string }) {
    if (params) {
      this.businessCategoryId = params.businessCategoryId;
      this.description = params.description;
    }
  }
}
