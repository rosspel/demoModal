import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', loadChildren:()=> import('./feature/employees/modules/employees.module').then(m => m.EmployeesModule)},
  { path: 'departments', loadChildren:() => import('./feature/departments/modules/departments.module').then(m=> m.DepartmentsModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
