import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Department } from '../department';
import { map, Observable } from 'rxjs';
import { HttpResponse } from '../models/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private httpClient : HttpClient) { }

  getDepartments(): Observable<Department[]>{
    return this.httpClient.get<HttpResponse<Department[]>>(`${this.apiServiceUrl}/employees/departments`).pipe(
      map((response: HttpResponse<Department[]>) => response.data)
    );
}
}
