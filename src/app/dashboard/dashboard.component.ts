import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  vente_j! : string;
  vente_m! : string;
  vente_t! : string;
  nb_client! : number;
  nb_medicament! : number;
  med_qte_ex! : number;
  med_date_ex! : number;
  nb_entree_j! : number;

  constructor(public shared : SharedService){}
  ngOnInit(): void {
    this.Vente_J();
    this.Vente_M();
    this.Vente_T();
    this.NB_Client();
    this.NB_Medicament();
    this.Med_Qte_Ex();
    this.Med_Date_Ex();
    this.NB_Entree_J();

  }
  Vente_J(){
    this.shared.vente_J().subscribe(
      vente =>{
        this.vente_j = vente;
      },
      error => {
        console.error('Error fetching vente_j', error);
      }
    );
  }
  Vente_M() {
    this.shared.vente_M().subscribe(
      vente => {
        this.vente_m = vente;
      },
      error => {
        console.error('Error fetching vente_m', error);
      }
    );
  }
  Vente_T() {
    this.shared.vente_T().subscribe(
      vente => {
        this.vente_t = vente;
      },
      error => {
        console.error('Error fetching vente_t', error);
      }
    );
  }
  NB_Client() {
    this.shared.nb_Client().subscribe(
      (nb : number) => {
        this.nb_client = nb;
      },
      (error : any) => {
        console.error('Error fetching nb_client', error);
      }
    );
  }
  NB_Medicament() {
    this.shared.nb_Medicament().subscribe(
      (nb : number) => {
        this.nb_medicament = nb;
      },
      (error : any) => {
        console.error('Error fetching nb_medicament', error);
      }
    );
  }
  Med_Qte_Ex() {
    this.shared.med_QTE_Ex().subscribe(
      (nb : number) => {
        this.med_qte_ex = nb;
      },
      (error : any) => {
        console.error('Error fetching med_qte_ex', error);
      }
    );
  }
  Med_Date_Ex() {
    this.shared.med_DATE_Ex().subscribe(
      (nb : number) => {
        this.med_date_ex = nb;
      },
      (error : any) => {
        console.error('Error fetching med_date_ex', error);
      }
    );
  }
  NB_Entree_J() {
    this.shared.nb_Entree_J().subscribe(
      (nb : number) => {
        this.nb_entree_j = nb;
      },
      (error : any) => {
        console.error('Error fetching nb_entree_j', error);
      }
    );
  }
  
  
}
/*
<div style="">
<div style="border: 2px solid black; width: 50%;height: 663px;"></div>
sdf
</div>
*/