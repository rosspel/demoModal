import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared.module';
import { DepartmentPageComponent } from '../components/department-page.component';
import { DepartmentsRoutingModule } from './departments-routing.module';


@NgModule({
    declarations:[DepartmentPageComponent],
    exports:[],
    imports:[DepartmentsRoutingModule,SharedModule]
})
export class DepartmentsModule {

}