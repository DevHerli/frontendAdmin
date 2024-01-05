import { Component, Input, OnInit } from '@angular/core';
import { SpecialityCategoryModel } from 'src/app/data/models/speciality-category.model copy';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';
import DateTimeUtils from 'src/app/data/utils/DateTimeFormat';

@Component({
  selector: 'app-speciality-container',
  templateUrl: './app-speciality-container.component.html',
  styleUrls: ['./app-speciality-container.component.scss']
})
export class AppSpecialityContainerComponent implements OnInit {

  @Input() set selectedSubcategory(subcategory: SubcategoryModel) {
    if (subcategory) {
      this._selectedSubcategory = subcategory;
      this.loadSpecialities();
    }
  }
  private _selectedSubcategory!: SubcategoryModel;

  public viewTableDetails: boolean = false;
  public isLoadingVisible: boolean = false;
  public currentPagePaginator: number = 1;
  public isPaginatorVisible: boolean = false;

  public specialityList!: SpecialityCategoryModel[];
  public specialityListCopy!: SpecialityCategoryModel[];

  constructor(private _categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.loadSpecialities();
  }

  public loadSpecialities(): void {
    this.isLoadingVisible = true;
    this.isPaginatorVisible = false;

    this._categoryService.getAllSpecialities().subscribe((data) => {
      if (data) {
        setTimeout(() => {
          console.log(data);
          this.specialityList = data;
          this.specialityListCopy = data;

          this.isLoadingVisible = false;
          this.isPaginatorVisible = true;

        }, (2 * 1000));
      }
    });
  }


  public searchFilter({ target }: any): void {
    const trimedValue: string = target.value;
    if (trimedValue !== '') {
      this.specialityList = this.specialityListCopy.filter(item =>
        item.description.toUpperCase().includes(trimedValue.toUpperCase())
      );
    }
    else {
      this.specialityList = this.specialityListCopy;
    }

  }

  dateformat(value: Date | string): string {
    return DateTimeUtils.convertTo_day_month_year(value);
  }


  selectSpeciality(a: any) { }
  editSpeciality(a: any) { }
  deleteSpeciality(a: any) { }
}
