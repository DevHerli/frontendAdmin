import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import { SweetAlertService } from 'src/app/data/services/categories/sweet-alert.service';

@Component({
  selector: 'app-subcategory-edit-form',
  templateUrl: './app-subcategory-edit-form.component.html',
  styleUrls: ['./app-subcategory-edit-form.component.scss']
})
export class AppSubcategoryEditFormComponent implements OnInit {
  public reactiveForm!: FormGroup;
  public descriptionControl!: AbstractControl;
  public activeControl!: AbstractControl;

  @Input() public set selectedSubcategory(subcategoryToEdit: SubcategoryModel | null) {
    if (subcategoryToEdit) {
      this._selectedSubcategory = subcategoryToEdit;
      this.reactiveForm.patchValue(this._selectedSubcategory);
      this.reactiveForm.enable()
    }
  }

  @Output() onFinishForm = new EventEmitter<any>();

  public get selectedSubcategory(): SubcategoryModel {
    return this._selectedSubcategory;
  }

  private _selectedSubcategory!: SubcategoryModel;

  private _defaultSubcategoryValue: SubcategoryModel = {
    active: false,
    id: 0,
    dateRegister: new Date(0),
    description: "",
    user: "NULL",
    businessCategoryId: 0
  }

  constructor(private _formbuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _sweetAlertService: SweetAlertService) {
    this._selectedSubcategory = this._defaultSubcategoryValue;
  }

  ngOnInit(): void {
    this.setReactiveForm();
  }

  public onSwitchValueChange(ev: any) {
    this.activeControl.setValue(ev)
    this.reactiveForm.updateValueAndValidity();
  }

  private setReactiveForm(): void {
    this.reactiveForm = this._formbuilder.group({
      description: new FormControl(this._selectedSubcategory.description, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      active: new FormControl(this._selectedSubcategory.active, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    })

    this.descriptionControl = this.reactiveForm.controls['description'];
    this.activeControl = this.reactiveForm.controls['active'];
  }

  public resetForm(): void {
    this.reactiveForm.patchValue(this._selectedSubcategory);
    this.reactiveForm.updateValueAndValidity();
  }


  public updateSubcategorySubmit(): void {

    let parameters = {
      id: this._selectedSubcategory.id,
      description: this.descriptionControl.value,
      businessCategoryId: this._selectedSubcategory.businessCategoryId,
      dateRegister: this._selectedSubcategory.dateRegister,
      user: this._selectedSubcategory.user,
      active: this.activeControl.value
    }
    this._sweetAlertService.showLoading

    this._categoryService.updateSubcategory(parameters).subscribe({
      next: (value) => {
        this._sweetAlertService.alertWithIcon("Realizado!", "Se ha modificado la subcategoría", "success")
        this.resetForm();
        this.onFinishForm.emit();
      },
      error: (err: HttpErrorResponse) => {
        this._sweetAlertService.alertWithIconAndFooter("Oops...!", "No se pudo editar la subcategoría", "error", err.message)
      },
    })


  }

}
