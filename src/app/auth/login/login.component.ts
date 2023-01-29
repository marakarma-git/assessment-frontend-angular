import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imgAuth = 'assets/img/login.gif'


  public loginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router
  ){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });
  }

  get f(){
    return this.loginForm.controls;
  }

  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['/dashboard/chart'])
      }else{
        alert("user not foud");
      }

    },err=>{
      alert("something went wrong")
    })
  }

}
