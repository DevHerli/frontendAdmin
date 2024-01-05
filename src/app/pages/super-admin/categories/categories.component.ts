import { Component } from '@angular/core';
import { CategoryModel } from 'src/app/data/models/category.model';
import { SubcategoryModel } from 'src/app/data/models/subcategory.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  public selectedCategory!: CategoryModel;
  public selectedSubcategory!: SubcategoryModel;

}
