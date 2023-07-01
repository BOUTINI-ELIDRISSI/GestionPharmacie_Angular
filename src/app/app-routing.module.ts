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

const routes: Routes = [
  
  { path: '',redirectTo: '/dashboard',pathMatch: 'full', },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  {path:'login', component: LoginComponent},
  {path:'menu-phar', component: MenuPharComponent},
  {path:'dashboard-phar', component: DashboardPharComponent},
  {path:'operations/:libelle', component: OperationsComponent},
  {path:'medicament', component: MedicamentComponent},
  {path: 'fournisseur', component : FournisseurComponent},
  {path : 'role', component:RoleComponent},
  {path: 'achat', component:AchatComponent},
  {path: 'vente', component:VenteComponent},
  {path: 'facture', component:FactureComponent},
  {path: 'commande', component:CommandeComponent},
  {path: 'client', component:ClientComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
