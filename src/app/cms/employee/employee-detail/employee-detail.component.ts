import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/shared/models/employee-model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  imgAvatar = 'assets/img/avatar.gif'

  id!: number;
  employee!: EmployeeModel


  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }


   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.find(this.id).subscribe((data: EmployeeModel)=>{
      this.employee = data;
    });
  }
}
