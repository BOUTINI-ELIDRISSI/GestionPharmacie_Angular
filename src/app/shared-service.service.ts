import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http: HttpClient ) { 
    
  }
user={
  id:0,
  nom:'',
  email:'',
}
role='';
 
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

  /******************************Client************************/
  allclient(){
    return this.http.get<any[]>(this.apiUrl + "clients/read");
  }
 
  search_client(email : String){
    return this.http.get(this.apiUrl + "clients/findByEmail?email="+email);
  }
  save_client(client : any){
    return this.http.post(this.apiUrl+"clients/create", client);
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
 
 

    

      /******************************Commands************************/

  allCommands() {
    return this.http.get<any[]>(this.apiUrl + "cmd/read");

  }
  cmds_no_user(){
    return this.http.get<any[]>(this.apiUrl + "cmd/findNoUser");
  }
  cmds_with_user(){
    return this.http.get<any[]>(this.apiUrl + "cmd/findWithUser");
  }
  save_cmd(o : any){
    return this.http.post(this.apiUrl + "cmd/create", o)
  }
  
  search_by_client(id : number){
    return this.http.get<any[]>(this.apiUrl + "cmd/findByClient?nom="+id);
  }
  search_cmd_code():Observable<number>{
    return this.http.get<number>(this.apiUrl + "cmd/findByBigcode");
  }
  search_by_code(code : number){
    return this.http.get(this.apiUrl + "cmd/findByCode?code="+code);
  }
  update_cmd(o : any){
    return this.http.put(this.apiUrl + "cmd/update", o)
  }

      /******************************Lignes************************/

  allligne(){
    return this.http.get<any[]>(this.apiUrl + "lignes/read");
  }
  save_ligne_table(ligne : any[]){
    return this.http.post(this.apiUrl + "lignes/create_table", ligne);
   }
  ligne_by_med(libelle : string):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + "lignes/findbyMedicament?medicamentLibelle="+libelle);
 }
 search_cmd(code : number){
  return this.http.get<any[]>(this.apiUrl + "lignes/findbyCommand?commandCode="+code);
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
  search_fourni(nom:string){
    return this.http.get(this.apiUrl + "fournisseurs/findByNom?nom="+nom);
  }

   /***********************************Medicament************************/
   allmedicament(){
    return this.http.get<any[]>(this.apiUrl + "medicaments/read");
  }
  search_med(libelle : string){
    return this.http.get(this.apiUrl + "medicaments/findbylibelle?libelle="+libelle);
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
  save_entree(entree : any){
    return this.http.post(this.apiUrl + "entree/create", entree);
    }
  entree_by_last_med(libelle : string){
    return this.http.get(this.apiUrl + "entree/findByLastEntree?libelle="+libelle);
    }
  entree_by_fourni(nom : string){
    return this.http.get<any[]>(this.apiUrl + "entree/findByFournisseur?nom="+nom);
  }
  /***********************************Sortie************************/
  sortie_by_med(libelle : string):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + "sorties/findbyMedicament?medicamentLibelle="+libelle);
 }
 save_sotie_table(sortie : any[]){
  return this.http.post(this.apiUrl + "sorties/create_table", sortie);
 }
  search_by_fact(code : number){
  return this.http.get<any[]>(this.apiUrl + "sorties/findbyFact?factureCode="+code);
}
delete_sortie(code : number){
  return this.http.delete(this.apiUrl + "sorties/"+code);
}
  
  /*****************************Facture************************/
  allfact(){
    return this.http.get<any[]>(this.apiUrl + "facts/read");
  }
  save_fact(fact : any){
    return this.http.post(this.apiUrl + "facts/create", fact);
  }
  search_fact_code():Observable<number>{
    return this.http.get<number>(this.apiUrl + "facts/findByBigcode");
  }
  delete_fact(code : number){
    return this.http.delete(this.apiUrl + "facts/"+code);
  }
/******************************Stock************************/
  allStock(){
  return this.http.get<any[]>(this.apiUrl + "stock/list_stock");
}
  envoyer_email(email:string, subject:string, body: string){
    return this.http.get(this.apiUrl + "stock/send_email?email="+email+"&subject="+subject+"&body="+body+"");
  }

}
