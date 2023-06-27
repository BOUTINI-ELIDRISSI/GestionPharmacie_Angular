import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit{
  modalVisible = false;
  modalVisible2 = false;
  modalVisible3 = false;
  modalVisibleinfo = false;
  allmed: any[]= [];
  ajouter_med={
    id: 0,
    libelle: '',
    description: '',
    maladies: [],
    ordonnance: true
  }
  maladie='';
  maladie2='';
  info_med:any;
  update_med : any;
  id_delete = 0;
  libelle_delete = '';
  constructor(public shared:SharedService){

  }
  openModal(): void {
    this.modalVisible = true;
    console.log("openModel is working")
    
  }
  openModal2(med : any): void {
    this.update_med = med;
    this.modalVisible2 = true;
    console.log("openModel for update is working")
    
  }
  openModal3(id : number, libelle:string): void {
    this.modalVisible3 = true;
    console.log("openModel of delete is working")
    this.id_delete = id;
    this.libelle_delete=libelle;
  }
  openModalinfo(med : any){
    this.modalVisibleinfo = true;
    this.info_med = med;
    console.log("openModel of info is working");
  }
  closeModal(): void {
    this.modalVisible = false;
    console.log("closeModal is working")

  }
  closeModal2(): void {
    this.modalVisible2 = false;
    console.log("closeModal for update is working")

  }
  closeModal3(): void {
    this.modalVisible3 = false;
    console.log("closeModal for delete is working")

  }
  closeModalinfo(){
    this.modalVisibleinfo = false;
    console.log("closeModal for info is working")

  }
  ngOnInit(): void {
    this.shared.allmedicament().subscribe(
      (allmed) => {
        this.allmed = allmed;
      },
      (error) => {
        console.error('Error fetching medicament data:', error);
      }
    )
  }
  ajouter_maladie(){

  }
  ajouter_maladie2(){

  }
  ajouter(){

  }

update(){

}

delete(){

}

}
