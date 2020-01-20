import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registerForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {validator: matchingFields('password', 'confirmPassword')}) 

   }

   onSubmit(){
     console.log(this.registerForm.value);
   }

}
function matchingFields(field1, field2){
  return form => {
    if(form.controls[field1].value !== form.controls[field2].value)
      return {matchingFields: true}
  }
}
