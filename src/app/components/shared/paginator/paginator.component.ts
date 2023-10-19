import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/data/models/category.model';
import { CategoryService } from 'src/app/data/services/categories/category.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() isVisible: boolean = false;
  public numberOfRegistersToShow: number = 0;
  public paginatorButtons: number = 0;
  public categoryList!: CategoryModel[];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this._categoryService.getListCategory().subscribe((data) => {
      this.categoryList = data;
      this.numberOfRegistersToShow = this.categoryList.length;
      this.paginatorButtons = Math.floor(this.numberOfRegistersToShow / 15) + 1;
    });
  }

  getPaginatorButtons(): number[] {
    return Array(this.paginatorButtons)
      .fill(0)
      .map((_, index) => index);
  }

  onClick(e: any): void {
    console.log(e);
  }
}
