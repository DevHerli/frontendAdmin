import { Component } from '@angular/core';
import { globalImagesConst } from '../data/consts/globalImages.const';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public globalImages: any = globalImagesConst;

  constructor() {}

  sidebarActive() {
    document.getElementsByTagName('body')[0].classList.remove('enlarge-menu');
  }
}
