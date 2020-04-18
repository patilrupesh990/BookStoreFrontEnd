import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Book } from "../model/book.model";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private _autoRefresh$ = new Subject();

  private httpOtions = {
    headers: new HttpHeaders({ "content-type": "application/json" }),
  };

  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, private httpservice: HttpService) {}
  getBookList(): Observable<any> {
    return this.httpservice.get(
      `${environment.bookApiUrl}/${environment.getBooksList}`,
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }
  getSellerBookList(): Observable<any> {
    return this.httpservice.get(
      `${environment.bookApiUrl}/${environment.getSellerBookList}`,
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }

  addBook(book: Book): Observable<any> {
    return this.httpservice
      .post(`${environment.bookApiUrl}/${environment.addbook}`, book, {
        headers: new HttpHeaders().set("token", sessionStorage.token),
      })
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  deleteBook(bookId): Observable<any> {
    return this.httpservice
      .delete(
        `${environment.bookApiUrl}/${environment.deleteBook}?bookId=${bookId}`,
        { headers: new HttpHeaders().set("token", sessionStorage.token) }
      )
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }
}
