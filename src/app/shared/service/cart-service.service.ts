import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CartServiceService {
  private _autoRefresh$ = new Subject();

  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, private httpservice: HttpService) {}

  addToBag(id, quantity): Observable<any> {
    return this.httpservice.post(
      `${environment.cartApiUrl}/${environment.addToBag}?bookId=${id}&qty=${quantity}`,
      {},
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }
  removeFromeBag(id): Observable<any> {
    return this.httpservice
      .delete(
        `${environment.cartApiUrl}/${environment.deleteOrder}?bookId=${id}`,
        { headers: new HttpHeaders().set("token", sessionStorage.token) }
      )
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  getCartList(): Observable<any> {
    return this.httpservice.get(
      `${environment.cartApiUrl}/${environment.cartList}`,
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }
}
