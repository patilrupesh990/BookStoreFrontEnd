import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { UserService } from "src/app/shared/service/user.service";
import { BookService } from "src/app/shared/service/book.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  name: any;
  id: any;
  isUser = false;
  isSeller = false;
  bookName: string;
  constructor(
    private userService: UserService,
    private bookService: BookService
  ) {
    this.name = sessionStorage.firstName + sessionStorage.lastName;
    this.userService.getQueryParam().subscribe((message) => {
      this.id = message.id;
      if (this.id === 1) {
        this.isSeller = false;
        this.isUser = true;
      } else if (this.id === 2) {
        this.isSeller = true;
      }
    });
  }

  ngOnInit() {}

  onClickClear() {
    sessionStorage.clear();
    localStorage.clear();
  }
  bookSearch() {
    // console.log(this.bookName);
    this.bookService.setSearchBookData(this.bookName);
  }
}
