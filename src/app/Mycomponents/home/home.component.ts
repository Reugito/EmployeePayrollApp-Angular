import { Component, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/EmployeeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  localItems: any;
  empDataList: EmployeeData[];
  constructor() { 
    this.localItems = localStorage.getItem("empDataList");
    if(this.localItems == null){
      this.empDataList = [];
    }
    else{
      this.empDataList = JSON.parse(this.localItems);
    }
  }
  ngOnInit(): void {
  }

  ondelete(empData:EmployeeData){
    const index = this.empDataList.indexOf(empData);
    this.empDataList.splice(index, 1)
    localStorage.setItem("empDataList", JSON.stringify(this.empDataList))
  }

  update(empData:EmployeeData){
    console.log("employeeData",empData)
    const index = this.empDataList.indexOf(empData);
    this.empDataList.splice(index, 1)
    localStorage.setItem("empDataList", JSON.stringify(this.empDataList))
  }
}
