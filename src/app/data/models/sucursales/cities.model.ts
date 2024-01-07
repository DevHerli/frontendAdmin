export class CitiesModel {
    public id!: number;
    public branch!: number;
    public nameShort!: string;
    public nameLong!: string;
    public state!: string;
    public country!: string;
    public user!: string;
    public dateRegister!: Date;
    public active!: boolean;
  
  
    constructor(params?: {
      id: number;
      branch: number;
      nameShort: string;
      nameLong: string;
      state: string;
      country: string;
      user: string;
      dateRegister: Date;
      active: boolean;
    }) {
      if (params) {
        this.id = params.id;
        this.branch = params.branch;
        this.nameShort = params.nameShort;
        this.nameLong = params.nameLong;
        this.state = params.state;
        this.country = params.country;
        this.user = params.user;
        this.dateRegister = params.dateRegister;
        this.active = params.active;
      }
    }
  }