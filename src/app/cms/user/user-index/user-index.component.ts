import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user-model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {

  users: UserModel[] = [];

  constructor(public userService: UserService){}

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: UserModel[])=>{
      this.users = data;
      console.log(this.users);
    })
  }

  deleteUser(id:number){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    })
  }

}
