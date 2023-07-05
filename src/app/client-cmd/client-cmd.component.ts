import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-cmd',
  templateUrl: './client-cmd.component.html',
  styleUrls: ['./client-cmd.component.css']
})
export class ClientCmdComponent implements OnInit{
  constructor(public shared : SharedService, public router:Router){}
  currentDate: string = new Date().toISOString();

  allmed : any[] = [];
  
  new_med=""
  
  ventes: any[] = [];
    save_vente={
      id:{
        medid:0,
        cmdcode:0
      },
      medicament:{
        id:0
      },
      commande:{
        code:0
      },
      quantite:0
    }
    table={
      medicament:{
        libelle:""
      },
      quantite:0,
      prix:0,
      TTC:0
  
    }
  Tables: any[]=[]
  ajouter_tables(){
    const newTable = {
      medicament: {
        libelle: this.table.medicament.libelle
      },
      quantite: this.table.quantite,
      prix: this.table.prix,
      TTC: this.table.TTC
    };
    this.new_med=newTable.medicament.libelle;
    this.Tables.push(newTable);
  }
  
  medi : any;
  
  search_med(libelle:string){ 
    this.shared.search_med(libelle).subscribe(
      (med) =>{
        this.medi=med;
        
          this.save_vente.medicament.id=this.medi.id;
          this.save_vente.id.medid=this.medi.id;
        
       
      }
    );
   
  }
  ajouter_ligne(){
    const new_vente = {
      id: {
        medid : this.save_vente.id.medid,
        cmdcode : 0
      },
      medicament: {
        id: this.save_vente.medicament.id
      },
      commande: {
        code: 0
      },
      quantite: this.save_vente.quantite
    };
    this.ventes.push(new_vente);
  }
  prix_total = 0;
TTC_total = 0
calcul_prix(){
  const tvaRate: number = 0.2;
  const tvaAmount: number = this.table.prix * tvaRate; 
  this.table.TTC=this.table.prix + tvaAmount;
  this.prix_total +=this.table.prix;
  this.TTC_total += this.table.TTC;
  //console.log("this is the prix p:"+ p);
  console.log("this is the prix total p:"+ this.prix_total);

}
  ajouter_vente(){
    this.calcul_prix();
    this.ajouter_tables();
    this.search_med(this.new_med);
    this.save_vente.quantite=this.table.quantite;
    this.ajouter_ligne();
    }
    
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
  
  last :any ;
    updatePrice(){
      this.shared.entree_by_last_med(this.table.medicament.libelle).subscribe(
        (entree) => {
          this.last=entree;
          if (this.last != null) {
            this.table.prix = this.last.prix_vente * this.table.quantite;
          }
        }
      );
      this.search_med(this.table.medicament.libelle);
    }
  
    delete(libelle:string){
      const index = this.Tables.findIndex(item => item.medicament.libelle === libelle);
      if (index !== -1) {
        this.Tables.splice(index, 1);
      }
      
    }
  
  
    modalVisible = false;
    openModal(): void {
      this.ajouter_cmd();
      this.modalVisible = true;
      console.log("openModel is working")
      this.search_cmd();
  
      
    }
    closeModal(): void {
      this.modalVisible = false;
      console.log("closeModal is working")
    
    }
  
    ngOnInit(): void {
     this.all_medicament();
  
    }
  ajouter(){
    this.aff();
  
    this.shared.save_ligne_table(this.ventes).subscribe(
        () => {
          console.log('good');
        },
        (error) => {
          console.error('Error fetching sortie data:', error);
        }
    )
    this.closeModal();
  
  }
  
   current_Date: Date = new Date();
   formatted_Date: string = this.current_Date.toISOString().slice(0, 23) + "+00:00";
   formatted_Date_DateObject: Date = new Date(this.formatted_Date);
  
  aff(){
  this.ventes.forEach((vente) => {
      vente.commande.code = this.code + 1;
      vente.id.cmdcode = this.code + 1;
    });
    
  }
    ajouter_cmd(){
      const cmd={
        code : 0,
        date_Cmd: this.formatted_Date_DateObject,
        prix_total:this.prix_total,
        client:{
          id:this.shared.user.id
        }
      }
      this.shared.save_cmd(cmd).subscribe(
        () => {
          console.log('good');
        },
        (error) => {
          console.error('Error fetching medicament data:', error);
        }
      );
  
    }
    code = 0;
    search_cmd(){
      this.shared.search_cmd_code().subscribe(
        (code) => {
          this.code=code;
        },
        (error) => {
          console.error('Error fetching code data:', error);
        }
      );
    }

    log_out(){
      this.router.navigate(['/login']);
    }
}
