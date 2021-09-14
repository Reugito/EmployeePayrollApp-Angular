import { FormGroup } from "@angular/forms";

export class EmployeeData{
    employeeId!: number
    name!: string ;
    gender!: string ;
    profilePic!: string;
    departments!: string[];
    salary!: number;
    startDate!: string;
    note!: string;
}