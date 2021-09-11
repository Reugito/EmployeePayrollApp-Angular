import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeData } from 'src/app/EmployeeData';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider/slider';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent implements OnInit {
  name = "";
  profile = "";
  gender = "";
  salary = "";
  date= "";
  note = "";
  day ="";
  month="";
  year=""
  department:string[]= [];
  @Output() empAdd: EventEmitter<EmployeeData> = new EventEmitter();
  localItems: any;
  empDataList: EmployeeData[];
  departments: FormGroup;
  constructor(fb: FormBuilder) {
    this.departments = fb.group({
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
  ngOnInit(): void {
  }

  onSubmit(){
    this.department= []
    this.date =""
    for (var val of ["HR", "Sales", "Finance", "Engineer", "Other"]) {
      if(this.departments.get(val)?.value){
        this.department.push(val)
      }
    }
    this.date = this.date+ " "+ this.day+" "+this.month+" "+this.year
    const empData = {
    name: this.name,
    profilepic: this.profile,
    gender: this.gender,
    department: this.department,
    salary: this.gridsize,
    startDate: this.date,
    note:this.note
    }
    console.log("AddedemployeeData",empData, "sal")
    this.empDataList.push(empData)
    localStorage.setItem("empDataList", JSON.stringify(this.empDataList))
  }
  
  gridsize: number = 5000;
  onInputChange(event: MatSliderChange) {
    this.gridsize = event.value ==null ? this.gridsize : event.value;
    console.log(this.gridsize, event.value)
  }
}
