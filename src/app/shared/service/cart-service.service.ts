import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CartServiceService {
  constructor(private http: HttpClient, private httpservice: HttpService) {}

  addToBag(id, quantity): Observable<any> {
    return this.httpservice.post(
      `${environment.cartApiUrl}/${environment.addToBag}?bookId=${id}&qty=${quantity}`,
      {},
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }
}
