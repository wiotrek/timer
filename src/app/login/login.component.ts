import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: ServiceService,

    ) {
      console.log(this.userService.isLogIn);
    }
    public logging: any;
    public wrong: string;

    ngOnInit(): void {
      this.logging = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(128)])
      });
    }
    public LoggingPost(): void {
      console.log(this.logging.value);
      
      this.userService.LoggingService(this.logging.value).subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.userService.isLogIn = this.userService.isExistToken();
          window.location.href = this.userService.localhost;
        },
        error => {
          console.log(error);
          this.wrong = 'Invalid login or password';
        }
      );

    }
}
