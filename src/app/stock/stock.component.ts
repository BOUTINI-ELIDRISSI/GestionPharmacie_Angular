import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{
  constructor(public shared:SharedService){

  }
  allstock: any[]=[];
  all_stock(){
    this.shared.allStock().subscribe(
      (allstock) => {
        // User saved successfully, perform any necessary actions
        this.allstock=allstock;
        console.log('stock saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving stock:', error);
      }
    )
  }
  ngOnInit(): void {
    this.all_stock();
  }
}
