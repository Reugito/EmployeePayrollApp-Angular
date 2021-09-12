import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeData } from 'src/app/EmployeeData';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider/slider';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/employeeservice/employee.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent implements OnInit {
  name:any;
  profile:any;
  gender:any;
  date:any;
  note:any;
  day ="";
  month="";
  year=""
  @Output() empAdd: EventEmitter<EmployeeData> = new EventEmitter();
  localItems: any;
  empDataList: EmployeeData[];
  department: FormGroup;
  
  constructor(fb: FormBuilder, private router:ActivatedRoute, private empService: EmployeeService) {
    this.department = fb.group({
      HR: false,
      Sales: false,
      Finance: false,
      Engineer: false,
      Other: false
    });
    this.localItems = localStorage.getItem("empDataList");
    if(this.localItems == null){
      this.empDataList = [];
    }
    else{
      this.empDataList = JSON.parse(this.localItems);
    }
  }
  index = -1
  data?:any
  ngOnInit(): void {
    this.data = this.router.snapshot.paramMap.get('title') 
    if(this.data == null){
      return
    }
    else{
      
      this.empDataList.forEach(ele => {
      if(ele.name == this.data){
        this.index = this.empDataList.indexOf(ele)
      }
    else{
      return
    }})
    const empData = this.empDataList[this.index]
    console.log("index",this.index)
    this.name = empData.name
    this.gender = empData.gender
    this.profile = empData.profilepic
    this.gridsize = empData.salary
    this.department.setValue({
      HR:empData.department?.includes("HR"),
      Sales:empData.department?.includes("Sales"),
      Finance:empData.department?.includes("Finance"),
      Engineer:empData.department?.includes("Engineer"),
      Other:empData.department?.includes("Other")
    })
    this.note = empData.note
    this.date = empData.startDate?.split(" ")
    this.day = this.date[1]
    this.month = this.date[2]
    this.year = this.date[3]
    }
  }

  departments:any
  onSubmit(){
    this.date=""
    this.departments = []
    this.date = this.date+ " "+ this.day+" "+this.month+" "+this.year
    for(let i of [ "HR","Sales", "Finance","Engineer","Other"]){
      if(this.department.get(i)?.value){
        this.departments.push(i)
      }
    }
    const empData = {
    name: this.name,
    profilepic: this.profile,
    gender: this.gender,
    department:this.departments,
    salary: this.gridsize,
    startDate: this.date,
    note:this.note
    }
    console.log("AddedemployeeData",empData, this.index),
    (this.index != -1) ? this.empDataList[this.index]= empData : this.empDataList.push(empData)
    this.empService.addEmployeePayrollData(this.empDataList[this.index])
	localStorage.setItem("empDataList", JSON.stringify(this.empDataList))
  }

  gridsize:any;
  onInputChange(event: MatSliderChange) {
    this.gridsize = event.value ==null ? this.gridsize : event.value;
    console.log(this.gridsize, event.value)
  }
}
