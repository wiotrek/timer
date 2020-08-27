import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private userService: ServiceService,
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
        },
        error => {
          console.log(error);
          this.errorP = 'Błędny login lub hasło';
        }
      );

    }
}
