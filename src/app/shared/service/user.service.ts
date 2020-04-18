import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private queryParam = new Subject<any>();

  private httpOtions = {
    headers: new HttpHeaders({ "content-type": "application/json" }),
  };
  constructor(private http: HttpClient, private httpservice: HttpService) {}

  registerUser(user: any): Observable<any> {
    console.log("User Email", user.email);
    return this.httpservice.post(
      `${environment.userApiUrl}/${environment.registerURL}`,
      user,
      this.httpOtions
    );
  }

  registerSeller(user: any): Observable<any> {
    return this.httpservice.post(
      `${environment.userApiUrl}/${environment.sellerRegister}`,
      user,
      this.httpOtions
    );
  }

  loginUser(user: any): Observable<any> {
    console.log("User Email", user.email, user.password);
    return this.httpservice.post(
      `${environment.userApiUrl}/${environment.userLoginUrl}/${user.email}`,
      user,
      { headers: new HttpHeaders().set("password", user.password) }
    );
  }

  loginAdmin(user: any): Observable<any> {
    return this.httpservice.post(
      `${environment.userApiUrl}/${environment.sellerLoginUrl}/${user.email}`,
      user,
      { headers: new HttpHeaders().set("password", user.password) }
    );
  }

  setQueryParam(message: any) {
    this.queryParam.next({ id: message });
  }

  getQueryParam(): Observable<any> {
    return this.queryParam.asObservable();
  }
}
