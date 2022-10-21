import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  newEmploye = new employe();

  constructor(private employeService: EmployeService,
    private router : Router ,) { 
    
  }
  ngOnInit(): void {

    
  }


  addEmploye(){
    // console.log(this.newProduit);
    this.employeService.ajouterEmploye(this.newEmploye);
    this.router.navigate(['employes']);
    }




}
