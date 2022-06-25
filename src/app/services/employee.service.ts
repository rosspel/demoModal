import { HttpClient, HttpParams } from "@angular/common/http";
import { CoreEnvironment } from "@angular/compiler/src/compiler_facade_interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../employee";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private httpClient : HttpClient){}

    getEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.apiServiceUrl}/employees`);
    }

    getEmployee(employeeId:number){
        let params = new HttpParams();
        params.append('id',employeeId)

        return this.httpClient.get<Employee>(`${this.apiServiceUrl}/employees/`,{
            params
        });
    }

  /* 
   getEmployee(id:number){
        return this.httpClient.get<Employee>(`${this.apiServiceUrl}/employees/${employeeId}`);
    } */

    addEmployee(employee: Employee) : Observable<Employee> {
        return this.httpClient.post<Employee>(`${this.apiServiceUrl}/employees/add`,employee);
    }

    updateEmployee(employeeId: number, employee: Employee) : Observable<Employee> {
        return this.httpClient.put<Employee>(`${this.apiServiceUrl}/employees/${employeeId}`,employee);
    }

    deleteEmployee(employeeId:number){
        return this.httpClient.delete(`${this.apiServiceUrl}/employees/${employeeId}`);
    }
}