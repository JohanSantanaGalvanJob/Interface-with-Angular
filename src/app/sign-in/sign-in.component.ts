import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = this.fb.group({
    name:  ['', [Validators.required]],
    age:  ['', [Validators.required,Validators.maxLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signInUser(){
    console.warn(this.signInForm.value)
  }

}
