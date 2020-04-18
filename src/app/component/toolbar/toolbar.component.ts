import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  name: any;
  constructor() {
    this.name = sessionStorage.firstName + sessionStorage.lastName;
  }

  ngOnInit() {}

  onClickClear() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
