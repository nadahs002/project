import { Injectable } from '@angular/core';
import { employe } from '../model/employe.model';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employes : employe[]; //un tableau de Produit
  employe! : employe;
  
 


  constructor() { 
    this.employes = [
      {idEmploye : 1, nomEmploye : "employe1", salaireEmploye : 3000.600, date : new Date("01/14/2011")},
      { idEmploye: 2, nomEmploye : "employe2", salaireEmploye : 450, date: new Date("12/17/2010")},
      { idEmploye : 3, nomEmploye :"employe3", salaireEmploye : 900.123, date: new Date("02/20/2020")}
    ]
  }
  
  listeEmployes():employe[] {
    return this.employes;
  }

  ajouterEmploye( p : employe){
    this.employes.push(p);
  }

    supprimerEmploye( p : employe){
      //supprimer le produit prod du tableau produits
      const index = this.employes.indexOf(p, 0);
      if (index > -1) {
      this.employes.splice(index, 1); // at position index remove one item 
      }
      
      }

      consulterProduit(id:number): employe{
        this.employe = this.employes.find(p => p.idEmploye == id)!;
        return this.employe;
        }
       
        trierEmployes(){
        this.employes = this.employes.sort((n1 , n2) =>{
          if (n1.idEmploye! > n2.idEmploye!){
            return 1 ;
          }
          if (n1.idEmploye! < n2.idEmploye!){
            return -1 ;
          }
          return 0 ;
        })
      }  
      
        

        
          
      
        updateEmploye(p:employe)
        {
        // console.log(p);
        this.supprimerEmploye(p);
        this.ajouterEmploye(p);
        this.trierEmployes();
        }



        
          



}
