import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaced
//Utilisateur Interface
export interface User {
  id : number;
  nom : string
  email: string;
  mot_de_passe: string;
  role: Role;
}
//Role interface
export interface Role{
  id : number;
  nom : string;
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http: HttpClient ) { 
    
  }
  email='';
  password = '';
  role='';
  private apiUrl = 'http://localhost:8085/api/';

  /***************************Utilisateur************************/
  search_user(email : String){
    return this.http.get(this.apiUrl + "users/findbyEmail?email="+email);
  }
  allUsers(){
    return this.http.get<any[]>(this.apiUrl + "users/read")
  }
  
    /***************************Dasboard************************/

  vente_J():Observable<string>{
    return this.http.get(this.apiUrl + "dashboard/Vente_J", { responseType: 'text' })
  }
  vente_M():Observable<string>{
    return this.http.get(this.apiUrl + "dashboard/Vente_M", { responseType: 'text' })
  }
  vente_T():Observable<string>{
    return this.http.get(this.apiUrl + "dashboard/Vente_T", { responseType: 'text' })
  }
  nb_Client():Observable<number>{
    return this.http.get<number>(this.apiUrl + "dashboard/NB_client")
  }
  nb_Medicament():Observable<number>{
    return this.http.get<number>(this.apiUrl + "dashboard/NB_medicament")
  }
  med_QTE_Ex():Observable<number>{
    return this.http.get<number>(this.apiUrl + "dashboard/Qte_medicament_expire")
  }
  med_DATE_Ex():Observable<number>{
    return this.http.get<number>(this.apiUrl + "dashboard/Date_medicament_expire")
  }
  nb_Entree_J():Observable<number>{
    return this.http.get<number>(this.apiUrl + "dashboard/Nombre_Entrees_J")
  }

}
