import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { EmployeService } from '../services/employe.service';
import { employe } from '../model/employe.model';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styles: [],
})
export class UpdateEmployeComponent implements OnInit {
  currentEmploye = new employe();


  constructor(private activatedRoute: ActivatedRoute,
    private employeService: EmployeService , private router :Router,
    ) { }

  ngOnInit() {
    this.currentEmploye = this.employeService.consulterProduit(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentEmploye);
  }

  updateEmploye()
  { //console.log(this.currentProduit);
  this.employeService.updateEmploye(this.currentEmploye);
  this.router.navigate(['employes']);
  }

}
