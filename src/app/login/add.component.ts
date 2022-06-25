import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  credentials= {
    name:"",
    role:"",
    depId: "",
    birthdate:"",
    email: ""
  }

  constructor(_employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  add() {
    console.log(this.credentials)
  }

}
