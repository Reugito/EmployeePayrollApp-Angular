import { Component, Input } from '@angular/core';
import { EmployeeData } from './EmployeeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeePayrollApp';

  @Input() empData!: EmployeeData; 
}
