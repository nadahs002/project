import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    AddEmployeComponent,
    AddEmployeComponent,
    UpdateEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
