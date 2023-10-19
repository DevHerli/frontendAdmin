import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import { CategoryModel } from '../../../../data/models/category.model';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './app-category-dropdown.component.html',
  styleUrls: ['./app-category-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppCategoryDropdownComponent),
      multi: true,
    },
  ],
})

export class AppCategoryDropdownComponent implements OnInit, ControlValueAccessor {

  @Output() onChangeOptionEmitter = new EventEmitter<any>();

  public set selectedOption(value: any) {
    this._selectedOption = value;
    this.onChange(this._selectedOption)
  }

  public get selectedOption(): any {
    return this._selectedOption;
  }

  public categoryList: CategoryModel[] = [];
  public placeholder: string = "Seleccione una categoría...";
  private _selectedOption: any = 0;

  constructor(private _categoryService: CategoryService) { }

  public ngOnInit(): void {
    this._categoryService.getListCategory().subscribe((data) => {
      this.categoryList = data;
    });
  }


  public onChangeOption(): void {
    this.onChangeOptionEmitter.emit(this._selectedOption);
  }

  //#region ControlValueAccessor
  onChange = (fn: any) => { };
  onTouched = (fn: any) => { };

  writeValue(value: any): void {
    this.selectedOption = value;
    this.onChange(this._selectedOption);
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void { }
  //#endregion ControlValueAccessor
}
