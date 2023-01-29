import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
imgAuth = 'assets/img/login.gif'

public registerForm !: FormGroup;

constructor(
  private formBuilder : FormBuilder,
  private http: HttpClient,
  private router :Router
  ){

    this.registerForm = formBuilder.group({
      fullname: ["", Validators.required]
  });
  }
ngOnInit(): void{
  this.registerForm = this.formBuilder.group({
    fullname:[''],
    username:[''],
    mobile:[''],
    email:[''],
    password:[''],
  })

  this.registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });
}

get f(){
  return this.registerForm.controls;
}

register(){
  this.http.post<any>("http://localhost:3000/users",this.registerForm.value).subscribe(res=>{
    this.registerForm.reset();
    this.router.navigate(['/login'])
  },err=>{
    alert("something went wrong")
  })
}

}
