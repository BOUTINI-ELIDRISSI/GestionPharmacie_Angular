import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
constructor(public shared : SharedService, public router:Router){}
password='';

client={
  nom:'',
  prenom:'',
  genre:'',
  email:'',
  adresse:'',
  tele:'',
  mot_de_passe:''

}
showPassword: boolean = false;

  togglePasswordVisibility(event: Event): void {
    this.showPassword = (event.target as HTMLInputElement).checked;
  }
saveclient(){
  
    this.shared.save_client(this.client).subscribe(
      () => {
        // User deleted successfully, perform any necessary actions
        console.log('client inserted successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error inserting client:', error);
      }
    )
  
 
}
s_client:any;
searchclient(){
  this.s_client=[];
  this.shared.search_client(this.client.email).subscribe(
    (s_client) => {
      this.s_client=s_client;
      
      console.log('cleint founded successfully!');
    },
    (error) => {
      // Handle the error case
      console.error('Error founding client:', error);
    }
  )
}
ngOnInit(): void {
  
}
id = 0;
ajout(){
  this.saveclient();
  setTimeout(() => {
    this.searchclient();
  },2000)
  
 
  setTimeout(() => {
    if (this.s_client) {
      this.id = this.s_client.id;
     
    }
  }, 3000);

  setTimeout(() => {
    this.shared.user.id=this.id;
    this.shared.user.email=this.client.email;
    this.router.navigate(['/clientmed']);
  }, 3500);

}
}
