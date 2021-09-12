import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './Mycomponents/add-emp/add-emp.component';
import { HomeComponent } from './Mycomponents/home/home.component';

const routes: Routes = [{
  path:'addEmployee',
  component: AddEmpComponent
},
{
  path: '',
  component: HomeComponent
},
{
path:'update',
component: AddEmpComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
