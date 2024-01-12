export class TypePermissionsModel {
    public id!: number;
    public typePermit!: number;
    public description!: string;
    public dateCreate!: Date;
    public user!: string;
    public active!: boolean;
  
  
    constructor(params?: {
      id: number;
      typePermit: number;
      description: string;
      dateCreate: Date;
      user: string;
      active: boolean;
    }) {
      if (params) {
        this.id = params.id;
        this.typePermit = params.typePermit;
        this.description = params.description;
        this.dateCreate = params.dateCreate;
        this.user = params.user;
        this.active = params.active;
      }
    }
  }