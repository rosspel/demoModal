import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { of, Subscription } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { Employee } from '../../../employee';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { ModalService } from '../../../modal.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit, OnDestroy {

  show = true;

  employees : Employee[] = [];
  employees2 : Employee[] = [];
  employees3 : Employee[] = [];

  subscription1?: Subscription;
  subscription2?: Subscription;
  subscriptions: Subscription[] = []

  constructor(private _employeeService : EmployeeService, public _modalService : ModalService) { }

  
  ngOnInit(): void {
    this.getAllEmployees();

    // this.subscription1 = this._employeeService.getEmployees().pipe(
    //   catchError((error)=> {
    //     alert(error.message);
    //     return of([]);
    //   }),
    // ).subscribe((employees:Employee[])=>{
    //   this.employees = employees
    // });



  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  getAllEmployees(){
    this.subscription1 = this._employeeService.getEmployees().subscribe({
      next: (employees:Employee[])=>{
        this.employees = employees;
        this.employees2 = employees;
        this.employees3 = employees;

      },
      error: (error : HttpErrorResponse) => alert(error.message)
    });
    this.subscriptions.push(this.subscription1);
  }

  onDeleteEmployee(employeeId:number){
    this.subscription2 = this._employeeService.deleteEmployee(employeeId).subscribe({
      next: ()=> {
        // this.getAllEmployees();
        this.employees = this.employees.filter(e=> e.id !== employeeId)
      },
      error: (error : HttpErrorResponse) => {
        alert(error.message)
      }
    });
    this.subscriptions.push(this.subscription2);
  }

  edit(employee: Employee){
    this._employeeService.updateEmployee(employee.id, employee).subscribe({
      next: ()=> {
        this.getAllEmployees();
      },
      error: (error : HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  valueFilter(input:string){
    const data = this.employees2;
    if(this.employees.length == 0){
      this.employees = this.employees2
    }
    this.employees = data.filter((f:any) => Object.keys(this.employees[0]).filter((k:any)=>k!=='salary').some((s : any) => f[s]?.toString().toLowerCase().indexOf(input.toLowerCase()) !== -1))
    console.log(this.employees)
  }


  toggleModal() {
    this.show = !this.show;
    this._modalService.toggleModal("auth");

  }

}
