import { Component } from '@angular/core';
import { EmployeeModel } from 'src/app/shared/models/employee-model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class EmployeeIndexComponent {

  employees: EmployeeModel[] = [];


  constructor(public employeeService: EmployeeService){}

  ngOnInit(): void {

    this.employeeService.getAll().subscribe((data: EmployeeModel[])=>{
      this.employees = data;
      console.log(this.employees);
    })
  }

  deleteEmployee(id:number){
    this.employeeService.delete(id).subscribe(res => {
         this.employees = this.employees.filter(item => item.id !== id);
         console.log('Employe deleted successfully!');
    })
  }

}
