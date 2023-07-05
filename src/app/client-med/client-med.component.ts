import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-client-med',
  templateUrl: './client-med.component.html',
  styleUrls: ['./client-med.component.css']
})
export class ClientMedComponent implements OnInit{
constructor(public shared:SharedService,public router:Router){}
med:any;
allmed: any[] = []
search="";
smed:any;
searchmed(){

  this.allmed=[];
  if (this.search !=""){
    this.shared.search_med(this.search).subscribe(
      (smed) => {
        // User saved successfully, perform any necessary actions
        this.allmed.push(smed);
        console.log('User saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving user:', error);
      }
    )
  }
  else{
    this.all_med();
  }
  
}

detailmed(libelle:string){
  this.shared.search_med(libelle).subscribe(
    (med) => {
      // User saved successfully, perform any necessary actions
      this.med=med;
      console.log('User saved successfully!');
    },
    (error) => {
      // Handle the error case
      console.error('Error saving user:', error);
    }
  )
}
all_med(){
  this.shared.allmedicament().subscribe(
    (allmed) => {
      // User saved successfully, perform any necessary actions
      this.allmed=allmed;
      console.log('User saved successfully!');
    },
    (error) => {
      // Handle the error case
      console.error('Error saving user:', error);
    }
  )
}
ngOnInit(): void {
  this.all_med();
}
modalVisible = false;
openModal(libelle : string): void {
  this.detailmed(libelle);
  this.modalVisible = true;
  console.log("openModel is working")
  
}
closeModal(): void {
  this.modalVisible = false;
  console.log("closeModal is working")

}
go_to_cmd(){
this.router.navigate(['/client_cmd'])
}
log_out(){
  this.router.navigate(['/login']);
}
}
