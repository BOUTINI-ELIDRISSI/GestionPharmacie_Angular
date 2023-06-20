import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuPharComponent } from './menu-phar/menu-phar.component';
import { DashboardPharComponent } from './dashboard-phar/dashboard-phar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'menu', component: MenuComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'menu-phar', component: MenuPharComponent},
  {path:'dashboard-phar', component: DashboardPharComponent},
  {path:'root', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
