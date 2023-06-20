import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GestionPharmacie';
  constructor(public shared : SharedService, public router : Router){}
  ngOnInit(): void {
    if (this.shared.email =='' && this.shared.password==''){
      this.router.navigate (['/login'])
    }
    else{
      if(this.shared.role == "Administrateur")
          this.router.navigate (['/menu'])
       if(this.shared.role == "Pharmacien")
          this.router.navigate (['/menu-phar'])
    }
  }
}
