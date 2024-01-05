export class SubcategoryModel {
  public id!: number;
  public description!: string;
  public businessCategoryId!: number;
  public dateRegister!: Date;
  public user!: string;
  public active!: boolean;

  constructor(params?: {
    id: number;
    description: string;
    businessCategoryId: number;
    dateRegister: Date;
    user: string;
    active: boolean;
  }) {
    if (params) {
      this.id = params.id;
      this.description = params.description;
      this.businessCategoryId = params.businessCategoryId;
      this.dateRegister = params.dateRegister;
      this.user = params.user;
      this.active = params.active;
    }
  }
}
