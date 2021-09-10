import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Mycomponents/home/home.component';
import { AddEmpComponent } from './Mycomponents/add-emp/add-emp.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
