import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{

  id_delete = 0;
  nom='';
  roles : any[]=[];
  modalVisibleajouter = false;
  modalVisibleupdate = false;
  modalVisibledelete = false;
  constructor(public shared:SharedService){

  }
  openModalajouter(): void {
    this.modalVisibleajouter= true;
    console.log("openModel for update is working")
    
  }
  openModalupdate(id : number, nom : string): void {
    this.modalVisibleupdate = true;
    this.update_role.id = id;
    this.update_role.nom = nom
    console.log("openModel for update is working")
    
  }
  openModaldelete(id : number, nom : string): void {
    this.id_delete=id;
    this.nom=nom;
    this.modalVisibledelete = true;
    console.log("openModel for delete is working")
    
  }
  closeModalajouter(): void {
    this.allrole();

    this.modalVisibleajouter = false;
    console.log("closeModal for update is working")
    this.allrole();


  }
  closeModalupdate(): void {
    this.allrole();

    this.modalVisibleupdate = false;
    console.log("closeModal for update is working")
    this.allrole();


  }
  closeModaldelete(): void {
    this.allrole();

    this.modalVisibledelete = false;
    console.log("closeModal for delete is working")
    this.allrole();


  }

  ngOnInit(): void {
    this.allrole();
  }
  allrole(){
    this.shared.all_roles().subscribe(
      (roles) => {
        // User saved successfully, perform any necessary actions

        this.roles=roles;
        console.log('User saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving user:', error);
      }
    )
  }
  ajouter_role = {
    id:0,
    nom:''
  }

  ajouter(){
    this.shared.save_role(this.ajouter_role).subscribe(
      () => {
        // User deleted successfully, perform any necessary actions
        this.allrole();

        console.log('Role inserted successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error inserting role:', error);
      }
    )
    this.allrole();

    this.closeModalajouter();
  }
  update_role ={
    id:0,
    nom:''
  }
  update(){
    this.shared.update_role(this.update_role).subscribe(
      () => {
        // User deleted successfully, perform any necessary actions
        this.allrole();

        console.log('Role updated successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error updating role:', error);
      }
    )
    this.allrole();

    this.closeModalupdate();
  }
  delete(){
      this.shared.delete_role(this.id_delete).subscribe(
        () => {
          // User deleted successfully, perform any necessary actions
          this.allrole();
          console.log('Role deleted successfully!');
        },
        (error) => {
          // Handle the error case
          console.error('Error deleting role:', error);
        }
      )
      this.allrole();

      this.closeModaldelete();
  }

}
