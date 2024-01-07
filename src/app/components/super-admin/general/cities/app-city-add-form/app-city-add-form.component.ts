import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesModel } from 'src/app/data/models/sucursales/cities.model'
import { BranchService } from 'src/app/data/services/branches/branch.service';
import { EstadosPaisesService } from 'src/app/data/services/shared/estados-paises.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-city-add-form',
  templateUrl: './app-city-add-form.component.html',
  styleUrls: ['./app-city-add-form.component.scss']
})
export class AppCityAddFormComponent implements OnInit{
  paises: any[] = [];
  estados: any[] = [];
  selectedPais: string = '';
  @Output() onFinishForm = new EventEmitter<boolean>();
  public reactiveForm!: FormGroup;
  public branchControl!: AbstractControl;
  public nameShortControl!: AbstractControl;
  public nameLongControl!: AbstractControl;
  public stateControl!: AbstractControl;
  public countryControl!: AbstractControl;
  public userControl!: AbstractControl;
  public dateRegisterControl!: AbstractControl;

  constructor(private _formbuilder: FormBuilder, 
              private _cityService: BranchService,
              private _estadosPaisesService: EstadosPaisesService) { }

  ngOnInit(): void {
    this.getPaises();
    this.setReactiveForm();
    this.reactiveForm.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  getPaises(){
    this._estadosPaisesService.getPaises().subscribe(
      data => {
        this.paises = data;
      });
  }

  getEstados(){
    if(this.selectedPais){
      this._estadosPaisesService.getEstados(this.selectedPais).subscribe((data) => {
        this.estados = data
      });
    }
  }

  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      branch: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(2), Validators.pattern(/^[0-9]*$/)]),
      nameShort: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      nameLong: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      state: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      user: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      dateRegister: new FormControl(null, [Validators.required]),
    })

    this.branchControl = this.reactiveForm.controls['branch'];
    this.nameShortControl = this.reactiveForm.controls['nameShort'];
    this.nameLongControl = this.reactiveForm.controls['nameLong'];
    this.stateControl = this.reactiveForm.controls['state'];
    this.countryControl = this.reactiveForm.controls['country'];
    this.userControl = this.reactiveForm.controls['user'];
    this.dateRegisterControl = this.reactiveForm.controls['dateRegister'];
  }


  public resetForm(): void {
    this.reactiveForm.reset();
    this.reactiveForm.updateValueAndValidity();
  }

  public onAddCitySubmit(): void {

    const submitParameters: Pick<CitiesModel, 'branch' | 'nameShort' | 'nameLong' | 'state' | 'country' | 'user' | 'dateRegister' | 'active'> = {
      branch: this.branchControl.value,
      nameShort: this.nameShortControl.value,
      nameLong: this.nameLongControl.value,
      state: this.stateControl.value,
      country: this.countryControl.value,
      user: "dhernandezd",
      active: true,
      dateRegister: new Date()
    }

    console.log(submitParameters);

    this._cityService.saveCity(submitParameters).subscribe({
      next: (resp) => {
        console.log(resp);
        swal.fire('Gracias...', '¡Sucursal agregada con éxito!', 'success');
        this.reactiveForm.reset();
        this.onFinishForm.emit(true);
      },
      error: (error: HttpErrorResponse) => {
        swal.fire(`${error.error}`, 'Vuelve a intentarlo', 'error');
        console.log(error)
      }

    });
  }

}
