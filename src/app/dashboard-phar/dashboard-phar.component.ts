import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-dashboard-phar',
  templateUrl: './dashboard-phar.component.html',
  styleUrls: ['./dashboard-phar.component.css']
})
export class DashboardPharComponent implements OnInit{
  constructor(public shared : SharedService){}
  nb_client! : number;
  nb_medicament! : number;
  med_qte_ex! : number;
  med_date_ex! : number;
  nb_entree_j! : number;
  ngOnInit(): void {
    this.NB_Client();
    this.NB_Medicament();
    this.Med_Qte_Ex();
    this.Med_Date_Ex();
    this.NB_Entree_J();
    this.allstock();
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

  stock : any[] = [];
  allstock(){
    this.shared.allStock().subscribe(
      (stock) => {
        this.stock=stock;
        console.log(' successfully!');
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }

}
