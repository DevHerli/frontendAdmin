import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sidebarActive(){
    document.getElementsByTagName('body')[0].classList.remove('enlarge-menu');
  }

}
