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
    maladies: [] as string[],
    ordonnance: true
  }
  maladie: string = '';
  maladie2: string = '';
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
    this.all_maladie();

    this.modalVisible = false;
    console.log("closeModal is working")
    this.all_maladie();

  }
  closeModal2(): void {
    this.all_maladie();

    this.modalVisible2 = false;
    console.log("closeModal for update is working")
    this.all_maladie();

  }
  closeModal3(): void {
    this.all_maladie();

    this.modalVisible3 = false;
    console.log("closeModal for delete is working")
    this.all_maladie();

  }
  closeModalinfo(){
    this.modalVisibleinfo = false;
    console.log("closeModal for info is working")

  }
  all_maladie(){
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
  ngOnInit(): void {
   this.all_maladie();
  }
  ajouter_maladie(){
    this.ajouter_med.maladies.push(this.maladie)
  }
  ajouter_maladie2(){
    this.update_med.maladies.push(this.maladie2)

  }
  ajouter(){
    this.shared.save_medicament(this.ajouter_med).subscribe(
      () => {
        // User deleted successfully, perform any necessary actions
        this.all_maladie();
        console.log('Medicament inserted successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error inserting medicament:', error);
      }
    )
    this.all_maladie();

    this.closeModal();

  }

update(){
  this.shared.update_medicament(this.update_med).subscribe(
    () => {
      // User deleted successfully, perform any necessary actions
      this.all_maladie();

      console.log('Medicament updated successfully!');

    },
    (error) => {
      // Handle the error case
      console.error('Error updating medicament:', error);
    }
  )
  this.all_maladie();

  this.closeModal2();

}

delete(){
  this.shared.delete_medicament(this.id_delete).subscribe(
    () => {
      // User deleted successfully, perform any necessary actions
      this.all_maladie();

      console.log('Role deleted successfully!');

    },
    (error) => {
      // Handle the error case
      console.error('Error deleting role:', error);
    }
  )
  this.all_maladie();
  this.closeModal3();

}

}
