export class CategoryModel {
  public id!: number;
  public description!: string;
  public dateRegister!: Date;
  public user!: string;
  public active!: boolean;


  constructor(params?: {
    id: number;
    description: string;
    dateRegister: Date;
    user: string;
    active: boolean;
  }) {
    if (params) {
      this.id = params.id;
      this.description = params.description;
      this.dateRegister = params.dateRegister;
      this.user = params.user;
      this.active = params.active;
    }
  }
}
