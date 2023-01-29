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
  groupList: any;
  statusList: any;
  selectedValue: any;

  constructor(
    public employeeService: EmployeeService,
    private router :Router
  ){ }

  ngOnInit(): void {

    this.employeeService.getGroup().subscribe((data:any)=>{
      this.groupList = data;
    })

    this.employeeService.getStatus().subscribe((data:any)=>{
      this.statusList = data;
    })

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      basicSalary: new FormControl('', Validators.required),
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

  changeGroup(e:any){
    console.log(e.target.value)
    this.selectedValue=e.terget.value;
  }

  changeStatus(e:any){
    console.log(e.target.value)
    this.selectedValue=e.terget.value;
  }

}
