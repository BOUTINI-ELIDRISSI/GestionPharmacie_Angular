import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-phar',
  templateUrl: './menu-phar.component.html',
  styleUrls: ['./menu-phar.component.css']
})
export class MenuPharComponent implements OnInit{
  constructor(public shared : SharedService, public router: Router){}
  
  ngOnInit(): void {
    if (this.shared.email =='' && this.shared.password==''){
      this.router.navigate (['/login'])
    }

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

  operationOptionsVisible: boolean = false;

  toggleOperationOptions() {
  this.operationOptionsVisible = !this.operationOptionsVisible;
  }
  log_out(){
    this.router.navigate (['/login'])
  }
}
