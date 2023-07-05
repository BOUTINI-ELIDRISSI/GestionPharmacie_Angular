import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit{
constructor(public shared : SharedService){}
modalVisible = false;
openModal(code : number): void {
  this.modalVisible = true;
  console.log("openModel is working")
  this.search_ligne(code);
  
}
closeModal(): void {
  this.modalVisible = false;
  console.log("closeModal is working")

}

///////////////////////
allcmd : any[]=[];
all_cmd(){
  this.shared.cmds_with_user().subscribe(
    (allcmd) => {
     this.allcmd=allcmd;
    },
    (error) => {
      // Handle the error case
      console.error('Error saving Commande:', error);
    }
  );

  
}

ngOnInit(): void {
  this.all_cmd();

  
}
lignes:any[]=[];
search_ligne(code : number){
  this.shared.search_cmd(code).subscribe(
    (lignes) => {
      this.lignes=lignes;
     },
     (error) => {
       // Handle the error case
       console.error('Error saving lignes:', error);
     }
  )
}

}
