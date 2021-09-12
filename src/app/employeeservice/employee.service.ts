import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/employeepayroll';
  
constructor(private http: HttpClient) {
    console.log("hii from services const");
  }
	getEmployeePayrollData(): Observable<any> {
		console.log("hiiii",`${this.url}`);
    return this.http.get(`${this.url}`);
  }

	addEmployeePayrollData(EmployeeData: Object): Observable<Object>{
		return this.http.post(`${this.url}`, EmployeeData)
	} 
 
}
