import { FormGroup } from "@angular/forms";

export class EmployeeData{
    name?: string ;
    gender?: string ;
    profilepic?: string;
    department?: string[];
    salary?: number;
    startDate?: string;
    note?: string;
}