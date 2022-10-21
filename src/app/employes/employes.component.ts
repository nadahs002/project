import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes : employe[]; //tableay d'employe
  

  constructor(private employeService: EmployeService ) {
    this.employes = employeService.listeEmployes();
    }

  ngOnInit(): void {
  }

  supprimerEmploye(p: employe)
{
// console.log(p);
this.employeService.supprimerEmploye(p);
}

}
