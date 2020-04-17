import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/model/user.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from "src/app/shared/service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  showSpinner = false;
  loginForm: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userservice: UserService,
    private spinner: NgxSpinnerService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    console.log("ngoninit---------------------------------------");
    this.spinner.show();
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: ["", [Validators.required]],
    });
  }
  onloginSubmit() {
    this.showSpinner = true;
    console.log("---------------------------------------");

    this.userservice.loginUser(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        this.matSnackBar.open("Successfully Loged In Wellcome", "ok", {
          duration: 5000,
        });

        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("response", response.response);
        sessionStorage.setItem("uname", response.userName);
        this.router.navigate(["dashboard"]);
        this.showSpinner = false;
      },
      (error: any) => {
        this.showSpinner = false;
        console.log(error.error.token);
        this.matSnackBar.open(error.error.token, "ok", { duration: 3000 });
      }
    );
  }
  get f() {
    return this.loginForm.controls;
  }
}
