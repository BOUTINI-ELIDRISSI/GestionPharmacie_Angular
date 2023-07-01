import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(public shared : SharedService, public router: Router){}
 // user:any[] = []
 // us : any;
  //// employee
  employeeOptionsVisible: boolean = false;

toggleEmployeeOptions() {
  this.employeeOptionsVisible = !this.employeeOptionsVisible;
}
//Operation
operationOptionsVisible: boolean = false;

toggleOperationOptions() {
  this.operationOptionsVisible = !this.operationOptionsVisible;
}


  ngOnInit() {
    /*this.us = this.act.snapshot.paramMap.get('user');
    if (this.us.email =='' && this.us.password==''){
      this.router.navigate (['/login'])
    }*/

    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    if (closeBtn ) {
      closeBtn.addEventListener("click", function() {
        sidebar?.classList.toggle("open");
        menuBtnChange();
      });

     
    }

    function menuBtnChange() {
      if (sidebar?.classList.contains("open")) {
        closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }
  go_to_user(){
    this.router.navigate (['/user'])
  }


  log_out(){
   // this.router.navigate (['/login'])
  }

}
