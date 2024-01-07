import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { UserService } from 'src/app/data/services/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  username: string;
  userRole: string;

  constructor(private userService: UserService) {
    this.username = userService.getUsername();
    this.userRole = userService.getUserRole();
  }
  public toggleButton(): void {
    document.querySelector('body')?.classList.toggle('enlarge-menu');
  }
}
