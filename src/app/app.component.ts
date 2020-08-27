import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private userService: ServiceService,
  ) {}
  leftTitle = 'Times';
  middleTitle = 'Go!';
  rightTitle = 'Log-In';
  isLogInAppComponent = this.userService.isLogIn;
}
