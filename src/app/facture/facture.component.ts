import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit{
  constructor(public shared : SharedService){}
  modalVisible = false;
  modalVisible2 = false;
  code=0;
  openModal(code : number): void {
    this.modalVisible = true;
    this.code=code;
    this.search_ventes();
    console.log("openModel is working")
    
  }
  openModal2(code : number): void {
    this.modalVisible2 = true;
    this.code=code;
    this.search_ventes();
    console.log("openModel2 is working")
    
  }
  closeModal(): void {
    this.modalVisible = false;
    console.log("closeModal is working")
  
  }
  closeModal2(): void {
    this.modalVisible2 = false;
    console.log("closeModal2 is working")
  
  }
  //////////////
  allfact : any[]=[];
all_fact(){
  this.shared.allfact().subscribe(
    (allfact) => {
     this.allfact=allfact;
    },
    (error) => {
      // Handle the error case
      console.error('Error saving facture:', error);
    }
  );
}
ventes: any[] = [];
search_ventes(){
  this.shared.search_by_fact(this.code).subscribe(
    (ventes) => {
      this.ventes=ventes;
     },
     (error) => {
       // Handle the error case
       console.error('Error saving ventes:', error);
     }
  )
}

ngOnInit(): void {
  this.all_fact();
}
delete_fact(){
  this.shared.delete_fact(this.code).subscribe(
    () => {
      console.log('good');
      this.all_fact();
     },
     (error) => {
       // Handle the error case
       console.error('Error saving ventes:', error);
     }
  )
  this.all_fact();

}
delete(){
  this.shared.delete_sortie(this.code).subscribe(
    () => {
      console.log('good');
      this.all_fact();
     },
     (error) => {
       // Handle the error case
       console.error('Error saving ventes:', error);
     }
  );
  this.delete_fact();
  this.all_fact();

  this.closeModal2();

}

}
