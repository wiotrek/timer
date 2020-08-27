import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: ServiceService,
    private router: Router
    ) {
      console.log(this.userService.isLogIn);
    }
    reactiveForm: any;
    public errorP: string;

    ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('')
      });
    }
    onLogin(): void {
      this.userService.loginUser(this.reactiveForm.value).subscribe(
        response => {
          localStorage.setItem('userToken', response.token);
          this.userService.isLogIn = this.userService.isExistToken();
          window.location.href = this.userService.localhost;
        },
        error => {
          console.log(error);
          this.errorP = 'Invalid login or password';
        }
      );

    }
}
