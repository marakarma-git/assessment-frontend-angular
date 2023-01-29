import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/shared/models/employee-model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
  id!: number;
  employee!: EmployeeModel;
  form!: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];
    this.employeeService.find(this.id).subscribe((data: EmployeeModel)=>{
      this.employee = data;
    });

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.employeeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Employee updated successfully!');
         this.router.navigateByUrl('employee/index');
    })
  }
}
