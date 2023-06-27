import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http: HttpClient ) { 
    
  }
 
  private apiUrl = 'http://localhost:8085/api/';
  /***************************Role**************************** */
  all_roles(){
    return this.http.get<any[]>(this.apiUrl + "roles/read");
  }
  sreach_role(nom : string){
    return this.http.get(this.apiUrl + "roles/findByNom?roleName="+nom);
  }
  save_role(rol : any){
    return this.http.post(this.apiUrl+"roles/create", rol);
  }

  update_role(o : any){
    return this.http.put(this.apiUrl+ "roles/update" , o)
  }

  delete_role(id:number){
    return this.http.delete(this.apiUrl + "roles/"+id)
  }
  /***************************Utilisateur************************/
  search_user(email : String){
    return this.http.get(this.apiUrl + "users/findbyEmail?email="+email);
  }
  allUsers(){
    return this.http.get<any[]>(this.apiUrl + "users/read");
  }
  search_nom(nom : string){
    return this.http.get(this.apiUrl + "users/findbyNom?nom="+nom);
  }
  save_user(us : any)
  {
    return this.http.post(this.apiUrl+"users/create", us);
  }

  delete_user(id : number){
    return this.http.delete(this.apiUrl + "users/"+id)
  }

  update_user(us : any){
    return this.http.put(this.apiUrl + "users/update", us)
  }
  /******************************Dasboard************************/

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
 
 

    /******************************Stock************************/
  allStock(){
      return this.http.get<any[]>(this.apiUrl + "stock/list_stock");
  }

      /******************************Commands************************/

  allCommands() {
    return this.http.get<any[]>(this.apiUrl + "cmd/read");

  }

      /******************************Lignes************************/

  allligne(){
    return this.http.get<any[]>(this.apiUrl + "lignes/read");
  }
  ligne_by_med(libelle : string):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + "lignes/findbyMedicament?medicamentLibelle="+libelle);
 }

  /***********************************Fournisseur************************/
  allfournisseur(){
    return this.http.get<any[]>(this.apiUrl + "fournisseurs/read");
  }
  save_fourni(o : any){
    return this.http.post(this.apiUrl + "fournisseurs/create", o)
  }
  update_fourni(o : any) {
    return this.http.put(this.apiUrl + "fournisseurs/update", o)

  }
  delete_fourni(id : number) {
    return this.http.delete(this.apiUrl + "fournisseurs/"+ id)

  }

   /***********************************Medicament************************/
   allmedicament(){
    return this.http.get<any[]>(this.apiUrl + "medicaments/read");
  }
  save_medicament(o : any){
    return this.http.post(this.apiUrl + "medicaments/create", o)
  }
  update_medicament(o : any) {
    return this.http.put(this.apiUrl + "medicaments/update", o)

  }
  delete_medicament(id : number) {
    return this.http.delete(this.apiUrl + "medicaments/"+ id)

  }
  
  /***********************************Entree************************/
  entree_by_med(libelle : string):Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl + "entree/findByMedicament?libelle="+libelle);
  }

  /***********************************Sortie************************/
  sortie_by_med(libelle : string):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + "sorties/findbyMedicament?medicamentLibelle="+libelle);
 }
 
  

}
