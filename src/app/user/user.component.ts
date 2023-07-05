import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
  //la visibilite de modal
  modalVisible = false;
  modalVisible2 = false;
  modalVisible3 = false;

  constructor(public shared : SharedService){

  }
  openModal(): void {
    this.modalVisible = true;
    console.log("openModel is working")
    
  }
  openModal2(us : any): void {
    this.update_user=us;
    this.modalVisible2 = true;
    //this.nom = nom;
    console.log("openModel for update is working")
    
  }
  openModal3(id : number, nom:string): void {
    this.modalVisible3 = true;
    console.log("openModel of delete is working")
    this.id = id;
    this.name=nom;
  }
  closeModal(): void {
    this.allusers();

    this.modalVisible = false;
    console.log("closeModal is working")
    this.allusers();


  }
  closeModal2(): void {
    this.allusers();

    this.modalVisible2 = false;
    console.log("closeModal for update is working")
    this.allusers();


  }
  closeModal3(): void {
    this.allusers();

    this.modalVisible3 = false;
    console.log("closeModal for delete is working")
    this.allusers();


  }

 /* onWindowClick(event: MouseEvent): void {
    if ((<HTMLElement>event.target).id === 'myModal') {
      this.closeModal();
    }
    if ((<HTMLElement>event.target).id === 'myModal2') {
      this.closeModal2();
    }
  }*/

  //l'affichage des utilisateurs
  allusers() : void{
    this.shared.allUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
    
  }
  users : any[] = [];
  roles : any[] = [];
  us ={
    nom:'',
    email:'',
    role:{
      id:0
    },
    mot_de_passe:''
  }
  ngOnInit(): void {
    this.allusers();
    this.shared.all_roles().subscribe(
      role=>{
        this.roles=role
      }
    )
  }
 
  //l'ajout d'utilisateur
  ajouter() : void{
    this.shared.save_user(this.us).subscribe(
      () => {
        // User saved successfully, perform any necessary actions
        this.allusers();

        console.log('User saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving user:', error);
      }
    );
    this.allusers();
    this.closeModal();
    
  }

  //supprimer utilisateur
  id! : number;
  name!: string;
  delete(): void{
    this.shared.delete_user(this.id).subscribe(
      () => {
        // User deleted successfully, perform any necessary actions
        this.allusers();
        console.log('User deleted successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error deleting user:', error);
      }
    )
    this.allusers();
    this.closeModal3();
  }
  //modifier le role 
  nom='';
  update_user={
    id: 0,
    nom: "",
    email: "",
    mot_de_passe: "",
      role: {
        id: 0
      }
    }

  update(){
    this.shared.update_user(this.update_user).subscribe(
      () => {
        // User deleted successfully, perform any necessary actions
        this.allusers();

        console.log('User updated successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error updating user:', error);
      }
    )
    this.allusers();
      this.closeModal2();
  }

  //new role
  new_role:any;
  ajouter_role() {
    this.shared.save_role(this.new_role).subscribe(
      () => {
        // User saved successfully, perform any necessary actions
        console.log('Role saved successfully!');
        this.allusers(); // Reload the data after save
      },
      (error) => {
        // Handle the error case
        console.error('Error saving role:', error);
      }
    );
    this.allusers();

  }
}
