import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GestionPharmacie';
  //user : any;
  //us!: User ;

  constructor( public shared : SharedService, public router : Router){}
  ngOnInit(): void {
    

    /*if (this.us.nom =='' && this.us.password==''){
      this.router.navigate (['/login'])
    }
    else{
      if(this.us.role == "Administrateur")
          this.router.navigate (['/menu/'+ this.user])
       if(this.us.role == "Pharmacien")
          this.router.navigate (['/menu-phar/' + this.user])
    }*/
  }
}
