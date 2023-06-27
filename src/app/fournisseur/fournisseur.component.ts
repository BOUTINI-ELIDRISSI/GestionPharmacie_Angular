import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit{
  allfourni: any[]= [];
  ajouter_fourni={
    id: 0,
    nom: '',
    tele_F: '',
    email_F: '',
    adresse_F: ''
  }
  update_fourni : any;
  id_delete = 0;
  nom_delete = '';
  modalVisible = false;
  modalVisible2 = false;
  modalVisible3 = false;
constructor(public shared : SharedService){

}

openModal(): void {
  this.modalVisible = true;
  console.log("openModel is working")
  
}
openModal2(fourni : any): void {
  this.update_fourni=fourni;
  this.modalVisible2 = true;
  console.log("openModel for update is working")
  
}
openModal3(id : number, nom:string): void {
  this.modalVisible3 = true;
  console.log("openModel of delete is working")
  this.id_delete = id;
  this.nom_delete=nom;
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


ngOnInit(): void {
  this.shared.allfournisseur().subscribe(
    (allfourni) => {
      this.allfourni = allfourni;
    },
    (error) => {
      console.error('Error fetching fournisseur data:', error);
    }
  )
}

//ajouter
ajouter(){
  this.shared.save_fourni(this.ajouter_fourni).subscribe(
    () => {
      // User saved successfully, perform any necessary actions
      console.log('Fournisseur saved successfully!');
    },
    (error) => {
      // Handle the error case
      console.error('Error saving fournisseur:', error);
    }
  );
}
update(){
  this.shared.update_fourni(this.update_fourni).subscribe(
    () => {
      // User deleted successfully, perform any necessary actions
      console.log('Fournisseur updated successfully!');
    },
    (error) => {
      // Handle the error case
      console.error('Error updating fournisseur:', error);
    }
  )
}
delete(){
  this.shared.delete_fourni(this.id_delete).subscribe(
    () => {
      // User deleted successfully, perform any necessary actions
      console.log('Fournisseur deleted successfully!');
    },
    (error) => {
      // Handle the error case
      console.error('Error deleting fournisseur:', error);
    }
  )
}
}
