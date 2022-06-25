import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employees-routing.module';
import { EmployeePageComponent } from 'src/app/feature/employees/components/employee-page.component';
import { SharedModule } from 'src/app/modules/shared.module';
import { AddComponent } from 'src/app/login/add.component';

@NgModule({
    declarations:[EmployeePageComponent],
    exports:[EmployeePageComponent],
    imports:[CommonModule,
             EmployeeRoutingModule,
            SharedModule]
})
export class EmployeesModule {

}