import { Component, OnInit } from "@angular/core";
import { MatDialog, MatSnackBar, TooltipPosition } from "@angular/material";
import { FormBuilder, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BookService } from "src/app/shared/service/book.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-displaybooks",
  templateUrl: "./displaybooks.component.html",
  styleUrls: ["./displaybooks.component.scss"],
})
export class DisplaybooksComponent implements OnInit {
  books: any;
  size: any;
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getAllBookList();
  }

  getAllBookList() {
    console.log(sessionStorage.token);
    this.bookService.getBookList().subscribe((message) => {
      console.log(message);
      this.books = message.bookList;
      this.size = message.bookList.length;
    });
  }
}
