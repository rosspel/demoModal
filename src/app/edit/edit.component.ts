import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'; //container di form
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  constructor(_employeeService : EmployeeService) {}

name= new FormControl("", [Validators.minLength(3)])
role = new FormControl("")
depId = new FormControl("")
birthdate= new FormControl("",[Validators.pattern(/(\d{2})(|-|\/|)(\d{2})(|-|\/|)(\d{4})/g)])
email= new FormControl("",[Validators.email])

updateForm = new FormGroup({
  name: this.name,
  role: this.role,
  depId: this.depId,
  birthdate: this.birthdate,
  email:this.email
})

showAlert=false
alertMsg="Please wait! Your account is being created."
alertColor="blue"


register() {
  this.showAlert=true
  this.alertMsg="Please wait! Your account is being created."
  this.alertColor="blue"
}


}