import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesModel } from 'src/app/data/models/sucursales/cities.model'
import { BranchService } from 'src/app/data/services/branches/branch.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-city-edit-form',
  templateUrl: './app-city-edit-form.component.html',
  styleUrls: ['./app-city-edit-form.component.scss']
})
export class AppCityEditFormComponent {

  @Input() public set selectedCity(cityToEdit: CitiesModel | null) {

    if (cityToEdit) {
      this._selectedCity = cityToEdit;
      this.reactiveForm.patchValue(this._selectedCity);
      this.reactiveForm.enable()
    }
  }

  public get selectedCity(): CitiesModel {
    return this._selectedCity;
  }

  private _selectedCity: CitiesModel;

  @Output() onFinishForm = new EventEmitter<boolean>();
  public reactiveForm!: FormGroup;
  public nameShortControl!: AbstractControl;
  public nameLongControl!: AbstractControl;
  public stateControl!: AbstractControl;
  public countryControl!: AbstractControl;
  public userControl!: AbstractControl;
  public dateRegisterControl!: AbstractControl;
  public branchControl!: AbstractControl;
  public activeControl!: AbstractControl;
  private _defaultCityValue: CitiesModel = {
    active: false,
    id: 0,
    dateRegister: new Date(0),
    branch: 0,
    nameShort: "",
    nameLong: "",
    state: "",
    country: "",
    user: "NULL"
  }
  public switchValue: boolean = false;

  constructor(private _formbuilder: FormBuilder, private _cityService: BranchService) {
    this._selectedCity = this._defaultCityValue;
  }

  ngOnInit(): void {
    this.setReactiveForm();
  }

  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      branch: new FormControl(null, [Validators.pattern(/^[0-9]*$/)]),
      nameShort: new FormControl(null, []),
      nameLong: new FormControl(null, []),
      state: new FormControl(null, []),
      country: new FormControl(null, []),
      dateRegister: new FormControl(null, []),
      active: new FormControl(this._selectedCity.active, []),
    })

    this.branchControl = this.reactiveForm.controls['branch'];
    this.nameShortControl = this.reactiveForm.controls['nameShort'];
    this.nameLongControl = this.reactiveForm.controls['nameLong'];
    this.stateControl = this.reactiveForm.controls['state'];
    this.countryControl = this.reactiveForm.controls['country'];
    this.dateRegisterControl = this.reactiveForm.controls['dateRegister'];
    this.activeControl = this.reactiveForm.controls['active'];

    this.reactiveForm.valueChanges.subscribe(data => console.log(data))

  }

  public resetForm(): void {
    this.reactiveForm.patchValue(this._selectedCity);
    this.reactiveForm.updateValueAndValidity();
  }

  public clearForm(): void {
    this._selectedCity = this._defaultCityValue;
    this.resetForm();
  }

  public onSwitchValueChange(ev: any) {

    this.activeControl.setValue(ev)
    this.reactiveForm.updateValueAndValidity();
  }


  public updateCitySubmit(): void {

    const submitParameters  = {
      branch: this.branchControl.value,
      nameShort: this.nameShortControl.value,
      nameLong: this.nameLongControl.value,
      state: this.stateControl.value,
      country: this.countryControl.value,
      user: "dhernandezd",
      dateRegister: this._selectedCity.dateRegister,
      active: this.activeControl.value,

    }

    this._cityService.updateCity(submitParameters).subscribe({
      next: (resp) => {
        swal.fire('Realizado!', '¡Sucursal actualizada con éxito!', 'success');
        this.clearForm();
        this.onFinishForm.emit(true);
      },

      error: (error: HttpErrorResponse) => {
        swal.fire(`${error.error}`, 'Vuelve a intentarlo', 'error');
        console.log(error.error)
      }
    })

  }

}
