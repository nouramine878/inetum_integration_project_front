import { Injectable } from '@angular/core';


import { JwtResponse } from "src/model/JwtResponse";

// ? TOKEN ACCESS KEY IN SESSION STORAGE
const TOKEN_KEY = "auth-key";

// ! USER DATA ACCESS KEY IN SESSION STORAGE
const USER_KEY = "user-key";

const CAT_ID = "id-category"

@Injectable({
  providedIn: "root",
})
export class SessionManService {
  
  constructor() {
    //this is the constructor of my service
  }

  signOut(): void {
    sessionStorage.clear();
    setTimeout(() => {
      window.location.href = ""
    }, 1500);
  }
  public saveToken(token: JwtResponse): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token.token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  /*public authenticateUser(user: UserDetails): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }*/
 public saveIdCategory(id : string){
   sessionStorage.setItem(CAT_ID,id);
 }
 public getIdCategory(): string | null {
  return sessionStorage.getItem(CAT_ID);
}


}
