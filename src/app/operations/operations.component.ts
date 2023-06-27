import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit{
  libelle :any;
  allEntree : any[] = [];
  allSortie : any[] = [];
  allLigne : any[] = [];
  constructor( public shared : SharedService,private act : ActivatedRoute){

  }
  ngOnInit(): void {
    this.libelle = this.act.snapshot.paramMap.get('libelle');
    this.entrees();
    this.sorties();
    this.lignes();
  }
  entrees(){
    this.shared.entree_by_med(this.libelle).subscribe(
      (allEntree) => {
        // User saved successfully, perform any necessary actions
        this.allEntree=allEntree;
        console.log('Entree saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving entree:', error);
      }
    )
  }

  sorties(){
    this.shared.sortie_by_med(this.libelle).subscribe(
      (allSortie) => {
        // User saved successfully, perform any necessary actions
        this.allSortie=allSortie;
        console.log('Sortie saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving sortie:', error);
      }
    )
  }
  lignes(){
    this.shared.ligne_by_med(this.libelle).subscribe(
      (allLigne) => {
        // User saved successfully, perform any necessary actions
        this.allLigne=allLigne;
        console.log('Ligne saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving ligne:', error);
      }
    )
  }
 
}
