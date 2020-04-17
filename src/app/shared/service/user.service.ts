import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
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

  loginUser(user: any): Observable<any> {
    console.log("User Email", user.email, user.password);
    return this.httpservice.post(
      `${environment.userApiUrl}/${environment.userLoginUrl}/${user.email}`,
      user,
      { headers: new HttpHeaders().set("password", user.password) }
    );
  }
}
