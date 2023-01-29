import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  form!:FormGroup;

  constructor(
    public employeeService: EmployeeService,
    private router :Router
  ){ }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.employeeService.create(this.form.value).subscribe((res:any) => {
         console.log('Employee created successfully!');
         this.router.navigateByUrl('employee/index');
    })
  }

}
