import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeData } from './EmployeeData';
import { EmployeeService } from './employeeservice/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
	title = 'EmployeePayrollApp';
	empData?: EmployeeData[];
	
	constructor(private router: Router, private empService: EmployeeService)
	 {}
	
	getEmployeePayrollData()
	{
		this.empService.getEmployeePayrollData()
		.subscribe( data => {
			this.empData = data;
		});
	}
	
	addEmployeePayrollData(): void 
	{
		this.router.navigate(['update'])
		.then((e) =>{
			if(e){
				console.log("Navigation is successful!");
			} else {
          		console.log("Navigation has failed!");
       		 }
		})
	}

  ngOnInit(): void {
	this.router.events.subscribe(value => {
		this.getEmployeePayrollData();
	})
  }
}
