import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit{
  modalVisible = false;
  modalVisible2 = false;
  modalVisible3 = false;

  constructor(public shared:SharedService){

  }
  openModal(): void {
    this.modalVisible = true;
    console.log("openModel is working")
    
  }
  openModal2(us : any): void {
    //this.update_user=us;
    this.modalVisible2 = true;
    //this.nom = nom;
    console.log("openModel for update is working")
    
  }
  openModal3(id : number, nom:string): void {
    this.modalVisible3 = true;
    console.log("openModel of delete is working")
   // this.id = id;
   // this.name=nom;
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
    
  }

}
