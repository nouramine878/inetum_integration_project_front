import { HttpHeaders } from "@angular/common/http";

export const httpOptions = {
    headers: new HttpHeaders({'Context-Type' : 'application/json'})
};