import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  constructor(public shared : SharedService){}
  currentDate: string = new Date().toISOString();

  allmed : any[] = [];

new_med=""

ventes: any[] = [];
  save_vente={
    id:{
      medicamentid:0,
      facturecode:0
    },
    medicament:{
      id:0
    },
    facture:{
      code:0
    },
    quantite:0
  }
  table={
    facturecode:0,
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
    facturecode: this.table.facturecode,
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
        this.save_vente.id.medicamentid=this.medi.id;
      
     
    }
  );
 
}
ajouter_ligne(){
  const new_vente = {
    id: {
      medicamentid : this.save_vente.id.medicamentid,
      facturecode : this.save_vente.id.facturecode
    },
    medicament: {
      id: this.save_vente.medicament.id
    },
    facture: {
      code: this.save_vente.facture.code
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
    this.ajouter_fact();
    this.modalVisible = true;
    console.log("openModel is working")
    this.search_fact();

    
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

  this.shared.save_sotie_table(this.ventes).subscribe(
      () => {
        console.log('good');
        this.message="La facture a été confirmée";
      },
      (error) => {
        console.error('Error fetching sortie data:', error);
        this.message="La facture n'a pas été confirmée";
      }
  )
  setTimeout(() => {
    this.message_visible=true;
    this.Tables=[];
      this.ventes=[];
  }, 1000);
  this.closeModal();
  setTimeout(() => {
    this.message_visible=false;
  }, 5000);

}

 current_Date: Date = new Date();
 formatted_Date: string = this.current_Date.toISOString().slice(0, 23) + "+00:00";
 formatted_Date_DateObject: Date = new Date(this.formatted_Date);

aff(){
this.ventes.forEach((vente) => {
    vente.facture.code = this.code + 1;
    vente.id.facturecode = this.code + 1;
  });
  
}
  ajouter_fact(){
     

    const fact={
      code : 0,
      datefact: this.formatted_Date_DateObject,
      prix_total:this.prix_total,
      utilisateur: {
        id : this.shared.user.id
      }
    }
    this.shared.save_fact(fact).subscribe(
      () => {
        console.log('good');
      },
      (error) => {
        console.error('Error fetching medicament data:', error);
      }
    );

  }
  code = 0;
  search_fact(){
    this.shared.search_fact_code().subscribe(
      (code) => {
        this.code=code;
      },
      (error) => {
        console.error('Error fetching medicament data:', error);
      }
    );
  }
////////////////////////////////

message="";
message_visible = false;

}
/*
 <div *ngFor="let item of ventes">
  <p>{{item.id.medicamentid}}</p>
  <p>{{item.id.facturecode}}</p>
  <p>{{item.medicament.id}}</p>
  <p>{{item.facture.code}}</p>
  <p>{{item.quantite}}</p>
  <P>************</P>
</div>
*/