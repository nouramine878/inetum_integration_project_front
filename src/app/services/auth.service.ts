import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtResponse } from 'src/model/JwtResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './HTTP_OPTIONS';



const BASE_URL = `${environment.API_LINK}/authenticate`;


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      `${BASE_URL}`,
    { username, password },
     httpOptions
   );
 }

 isLogged(){
   return !!sessionStorage.getItem("auth-key");
 }
}
