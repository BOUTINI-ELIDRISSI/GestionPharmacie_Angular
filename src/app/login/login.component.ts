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
      email='';
      password='';
      error='';
      role='';
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
        this.signIn(); // Call signIn function after retrieving the user
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }
  signIn(): void {
    if (this.user && this.user.email !== null) { // Check if user is defined and email is not null
      if (this.user.mot_de_passe === this.password) {
        
        this.router.navigate(['/root']);
      } else {
        this.error = 'Le mot de passe est incorrect';
      }
    } else {
      this.error = 'Cet email n\'existe pas';
    }
  }
}
/*
[(ngModel)]="user.email" 
[(ngModel)]="user.password"
<p>Email :{{user.email}}</p>
<p>Mot de passe : {{user.password}}</p>
*/