import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsComponent} from "./accounts/accounts.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";

const routes: Routes = [
  { path :"login", component : LoginComponent},
  { path :"", redirectTo: "/login", pathMatch: "full"},
  { path :"admin", component : AdminTemplateComponent, children : [
      { path :"accounts", component : AccountsComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
