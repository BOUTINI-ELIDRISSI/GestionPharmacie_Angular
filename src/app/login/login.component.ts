import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
      user: any ;
      client : any;
      email='';
      password='';
      error='';
  constructor( public shared: SharedService, private router : Router){
  }

  ngOnInit(): void {
   
  }
  
  showPassword: boolean = false;

  togglePasswordVisibility(event: Event): void {
    this.showPassword = (event.target as HTMLInputElement).checked;
  }
  search(): void {
    this.shared.search_user(this.email).subscribe(
      user => {
        this.user = user;
        this.shared.role=this.user.role.nom;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
    if(this.user == null){
      this.shared.search_client(this.email).subscribe(
        client => {
          this.client = client;
          this.shared.role = 'client';
        },
        error => {
          console.error('Error fetching users', error);
        }
      );
    };
    if (this.client == null && this.user == null){
      this.shared.role='';
    }
    this.signIn();
  }


  
  signIn(): void {
   
    if(this.shared.role == 'Administrateur'){

    if(this.password == this.user.mot_de_passe){
      this.shared.user.email = this.email;
      this.shared.user.id = this.user.id;
      this.router.navigate(['/menu'])
    }
    else{
      this.error="le mot de passe est incorrect";

    }
   }
   else if(this.shared.role == "Pharmacien"){
    if(this.password == this.user.mot_de_passe){
    this.router.navigate(['/menu-phar'])
    this.shared.user.email = this.email;
    this.shared.user.id = this.user.id;
    }
    else{
      this.error="le mot de passe est incorrect";

    }
   }
   else if(this.shared.role == "client"){
    if(this.password == this.client.mot_de_passe){
      this.shared.user.email = this.email;
      this.shared.user.id = this.client.id;
    this.router.navigate(['/clientmed'])
    }
    else{
      this.error="le mot de passe est incorrect";

    }
   }
}
/*
[(ngModel)]="user.email" 
[(ngModel)]="user.password"
<p>Email :{{user.email}}</p>
<p>Mot de passe : {{user.password}}</p>
*/
}