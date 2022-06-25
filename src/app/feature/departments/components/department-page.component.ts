import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from 'src/app/department';
import { DepartmentService } from '../../../services/department.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss']
})
export class DepartmentPageComponent implements OnInit, OnDestroy {

  departments : Department[] = [];
  subscription1?: Subscription;
  subscriptions: Subscription[] = []

  constructor(private _departmentService : DepartmentService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  getAllDepartments() {
    this.subscription1 = this._departmentService.getDepartments().subscribe({
      next: (departments:Department[])=>{
        this.departments = departments;
      

      },
      error: (error : HttpErrorResponse) => alert(error.message)
    });
    this.subscriptions.push(this.subscription1);
  }

}
