import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeData } from 'src/app/EmployeeData';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider/slider';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/Myservices/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent implements OnInit {
  
  day="";
  month =""
  year = ""
  employee: EmployeeData = new EmployeeData();
  department: FormGroup;
  constructor(fb: FormBuilder, private router:ActivatedRoute,private route: Router,private empService: EmployeeService){
    this.department = fb.group({
      HR: false,
      Sales: false,
      Finance: false,
      Engineer: false,
      Other: false
    });
  }
  
  date: any;
  id: any
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    if(this.id != null){
      this.newEmployee()
      this.empService.getEmployee(this.id)
      
      .subscribe(empData => {
        console.log("before update", empData)
        this.employee = empData;
        this.department.setValue({
          HR:empData.departments?.includes("HR"),
          Sales:empData.departments?.includes("Sales"),
          Finance:empData.departments?.includes("Finance"),
          Engineer:empData.departments?.includes("Engineer"),
          Other:empData.departments?.includes("Other")
        })
        this.date = empData.startDate?.split("-")
        this.day = this.date[2]
        this.month = this.date[1]
        this.year = this.date[0]
        console.log("date", this.date)
      })

    }
  }

  newEmployee(): void{
    this.employee = new EmployeeData();
  }

  departments:any
  save() {
    this.departments = []
    for(let i of [ "HR","Sales", "Finance","Engineer","Other"]){
      if(this.department.get(i)?.value){
        this.departments.push(i)}
    }

    this.employee.departments = this.departments
    this.employee.startDate = this.day+ "-"+this.month+ "-"+ this.year
    console.log(this.employee.startDate)
    console.log("employee",this.employee)

    if(this.id == null){
    this.empService.createEmployee(this.employee)
    .subscribe(data => console.log("Data", data))
    this.employee = new EmployeeData();
    }else{
      this.onUpdate();
    }
    this.gotoList();
  }

  onSubmit(){
    this.save() 
  }

  onUpdate(){
    console.log("updated", this.employee)
    this.empService.updateEmployee(this.id, this.employee)
    .subscribe(data => console.log("updated",data))
    this.employee = new EmployeeData();
    this.gotoList();
  }
  gotoList() {
    setTimeout(() => {
      this.route.navigate([''])
    }, 2000);
    
  }

  onInputChange(event: MatSliderChange) {
    this.employee.salary = event.value ==null ? this.employee.salary : event.value;
    console.log(this.employee.salary, event.value)
  }
}
