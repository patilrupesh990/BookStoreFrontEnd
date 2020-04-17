import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private httpOtions = {
    headers: new HttpHeaders({ "content-type": "application/json" }),
  };
  constructor(private http: HttpClient, private httpservice: HttpService) {}
  getBookList(): Observable<any> {
    return this.httpservice.get(
      `${environment.bookApiUrl}/${environment.getBooksList}`,
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }
}
