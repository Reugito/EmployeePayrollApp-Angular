import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeData } from 'src/app/EmployeeData';
import { EmployeeService } from 'src/app/Myservices/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  departments = ["HR", "Sales", "Finance", "Engineer", "Other"]
  employees!:Observable< EmployeeData[]>;
  cnt!:number
  constructor(private employeeDataService: EmployeeService, private router: Router) {}
  ngOnInit(): void {
    this.reloadData();
  }


  reloadData(){
    this.employees = this.employeeDataService.getEmployeeData();
    console.log("total emp", typeof(this.employees), "==", this.employees)
  }

  deleteEmployee(id:number){
    this.employeeDataService.deleteEmployee(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData()
      })
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id])
  }
}
