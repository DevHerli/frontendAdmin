import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './app-loading-spinner.component.html',
  styleUrls: ['./app-loading-spinner.component.scss'],
})
export class AppLoadingSpinnerComponent {
  @Input() isLoadingVisible: boolean = false;
}
