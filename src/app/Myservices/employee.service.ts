import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeData } from '../EmployeeData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost:8080/employeepayroll/";
  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<EmployeeData[]>{
    return this.http.get<EmployeeData[]>(`http://localhost:8080/employeepayroll`);
  }
  
  getEmployee(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/employeepayroll//employee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/employeepayroll/add`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/employeepayroll/update/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/employeepayroll/delete/${id}`, { responseType: 'text' });
  }
}
