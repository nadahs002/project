import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './employes/employes.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

const routes: Routes = [
    {path: "employes", component : EmployesComponent},
    {path: "add-employe", component : AddEmployeComponent},
    {path: "", redirectTo: "employes", pathMatch: "full" },
    {path: "updateEmploye/:id", component: UpdateEmployeComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
