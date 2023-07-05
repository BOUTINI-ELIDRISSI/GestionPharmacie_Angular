import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuPharComponent } from './menu-phar/menu-phar.component';
import { DashboardPharComponent } from './dashboard-phar/dashboard-phar.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { OperationsComponent } from './operations/operations.component';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';
import { CommandeComponent } from './commande/commande.component';
import { FactureComponent } from './facture/facture.component';
import { ClientComponent } from './client/client.component';
import { StockComponent } from './stock/stock.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClientMedComponent } from './client-med/client-med.component';
import { ClientCmdComponent } from './client-cmd/client-cmd.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    MenuPharComponent,
    DashboardPharComponent,
    RoleComponent,
    UserComponent,
    FournisseurComponent,
    MedicamentComponent,
    OperationsComponent,
    AchatComponent,
    VenteComponent,
    CommandeComponent,
    FactureComponent,
    ClientComponent,
    StockComponent,
    InscriptionComponent,
    ClientMedComponent,
    ClientCmdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
