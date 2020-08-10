import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    password: new FormControl('')
  });

  constructor(
  ) { }

  onSubmit() {
    console.log(this.reactiveForm);

  }
}
