import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { BookService } from "src/app/shared/service/book.service";

@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.scss"],
})
export class AddbookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      bookName: ["", [Validators.required]],
      authorName: ["", Validators.required],
      price: ["", [Validators.required], Validators.pattern("^[0-9]*$")],
      quantity: ["", [Validators.required], Validators.pattern("^[0-9]*$")],
      bookDetails: ["", [Validators.required]],
      bookCode: ["", [Validators.required]],
    });
  }
  onClickaddBook() {
    this.bookService.addBook(this.bookForm.value).subscribe(
      (user) => {
        this.matSnackBar.open("Book Added SuccessFully", "ok", {
          duration: 4000,
        });
      },
      (error: any) => {
        this.matSnackBar.open(error.error, "ok", { duration: 4000 });
        console.log(error);
      }
    );
    if (this.bookForm.invalid) {
      return;
    }
  }
}
