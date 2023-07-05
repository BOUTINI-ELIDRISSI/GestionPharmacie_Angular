import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuPharComponent } from './menu-phar/menu-phar.component';
import { DashboardPharComponent } from './dashboard-phar/dashboard-phar.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { OperationsComponent } from './operations/operations.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { RoleComponent } from './role/role.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';
import { FactureComponent } from './facture/facture.component';
import { CommaExpr } from '@angular/compiler';
import { CommandeComponent } from './commande/commande.component';
import { ClientComponent } from './client/client.component';
import { StockComponent } from './stock/stock.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClientMedComponent } from './client-med/client-med.component';
import { ClientCmdComponent } from './client-cmd/client-cmd.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path:'login', component: LoginComponent},

  { path: 'menu', component:MenuComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'role', component: RoleComponent },
    {path:'medicament', component: MedicamentComponent},
    {path: 'fournisseur', component : FournisseurComponent},
    {path: 'achat', component:AchatComponent},
    {path: 'vente', component:VenteComponent},
    {path: 'facture', component:FactureComponent},
    {path: 'commande', component:CommandeComponent},
    {path: 'client', component:ClientComponent},
    {path: 'stock', component:StockComponent},
    {path:'operations/:libelle', component: OperationsComponent},
  ]
},
 {path: 'menu-phar', component:MenuPharComponent, children:[
  { path: '', redirectTo: 'dashboard-phar', pathMatch: 'full' },
    {path:'dashboard-phar', component: DashboardPharComponent},
    {path:'medicament', component: MedicamentComponent},
    {path: 'fournisseur', component : FournisseurComponent},
    {path: 'achat', component:AchatComponent},
    {path: 'vente', component:VenteComponent},
    {path: 'facture', component:FactureComponent},
    {path: 'stock', component:StockComponent},
    {path:'operations/:libelle', component: OperationsComponent},
 ]
},
  {path:'inscri', component: InscriptionComponent},
  {path:'clientmed', component: ClientMedComponent},
  {path:'client_cmd', component: ClientCmdComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
