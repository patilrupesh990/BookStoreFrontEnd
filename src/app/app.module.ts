import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./component/authentication/registration/registration.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatCardTitle,
  MatSnackBar,
  MatSnackBarModule,
  MatOption,
  MatOptionModule,
  MatSelectModule,
} from "@angular/material";
import { ReactiveFormsModule, FormBuilder, FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from "@angular/common/http";
import { UserLoginComponent } from "./component/authentication/user-login/user-login.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { DisplaybooksComponent } from "./component/displaybooks/displaybooks.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AddbookComponent } from "./component/addbook/addbook.component";
import { MatMenuModule } from "@angular/material/menu";
import { UpdateBookComponent } from "./component/update-book/update-book.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserLoginComponent,
    ToolbarComponent,
    DashboardComponent,
    DisplaybooksComponent,
    AddbookComponent,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  entryComponents: [AddbookComponent, UpdateBookComponent],
  providers: [],
  bootstrap: [AppComponent],
})
// tslint:disable-next-line: one-line
export class AppModule {}
