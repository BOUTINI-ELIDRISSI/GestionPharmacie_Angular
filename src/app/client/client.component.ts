import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  constructor(public shared: SharedService){}
  allclient : any[]=[];

  modalVisibleajouter = false;
  openModal(id : number): void {
    this.modalVisibleajouter= true;
    console.log("openModel for update is working")
    this.command(id);
  }
  all_client(){
    this.shared.allclient().subscribe(
      (allclient) => {
        this.allclient=allclient;
        console.log('client saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving client:', error);
      }
    )
  }
  ngOnInit(): void {
    this.all_client();
  }
cmds : any[] = []
  command(id : number){
    this.shared.search_by_client(id).subscribe(
      (cmds) => {
        this.cmds=cmds;
      },
      (error) => {
        // Handle the error case
        console.error('Error saving client:', error);
      }
    )
  }
}
