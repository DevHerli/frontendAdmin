export class CategoryModel {
  public businessCategoryId!: number;
  public description!: string;
  public dateRegister!: string;
  public user!: string;
  public active!: boolean;


  constructor(params?: {
    businessCategoryId: number;
    description: string;
    dateRegister: string;
    user: string;
    active: boolean;
  }) {
    if (params) {
      this.businessCategoryId = params.businessCategoryId;
      this.description = params.description;
      this.dateRegister = params.dateRegister;
      this.user = params.user;
      this.active = params.active;
    }
  }
}
