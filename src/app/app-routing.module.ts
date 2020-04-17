import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./component/authentication/registration/registration.component";
import { UserLoginComponent } from "./component/authentication/user-login/user-login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { DisplaybooksComponent } from "./component/displaybooks/displaybooks.component";

const routes: Routes = [
  { path: "register", component: RegistrationComponent },
  { path: "", component: UserLoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [{ path: "", component: DisplaybooksComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
