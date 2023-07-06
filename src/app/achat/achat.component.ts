import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit{
  currentDate: string = new Date().toISOString();
  constructor(public shared : SharedService,) {
   
  }
  message="";
  message_visible = false;
  allmed : any[] = [];
  save_achat={
    quantite:0,
    date_entree:  this.currentDate,
    date_expiration: new Date(),
    prix_achat:0,
    prix_vente:0,
    medicament:{
      id:0
    },
    fournisseur:{
      id:0
    },
    utilisateur:{
      id:this.shared.user.id
    }
  } ;
  allfourni : any[] = [];

  all_medicament(){
    this.allmed=[];
    this.shared.allmedicament().subscribe(
      (allmed) => {
        this.allmed = allmed;
      },
      (error) => {
        console.error('Error fetching medicament data:', error);
      }
    )
  }
  all_fourni(){
    this.allfourni=[];
    this.shared.allfournisseur().subscribe(
      (allfourni) => {
        this.allfourni = allfourni;
      },
      (error) => {
        console.error('Error fetching fournisseur data:', error);
      }
    )
  }

  ngOnInit(): void {
    this.all_medicament();
    this.all_fourni();

    this.save_achat.utilisateur.id=this.shared.user.id;
  }
  ajouter(){
    
    this.shared.save_entree(this.save_achat).subscribe(
      () => {
        // User saved successfully, perform any necessary actions
        console.log('Fournisseur saved successfully!');
        this.message="Le médicament a été bien acheté";
      },
      (error) => {
        // Handle the error case
        console.error('Error saving fournisseur:', error);
        this.message="Le médicament n'a pas été bien acheté";
      }
    );
    this.message_visible=true;
    setTimeout(() => {
      this.message_visible=false;
    }, 4000);
  } 
} 
