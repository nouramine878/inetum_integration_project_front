import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionManService } from "../services/session-man.service";

const TOKEN_HEADER_KEY = "Authorization"; // for Spring Boot back-end

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private ses: SessionManService) {}

  intercept(req: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authReq = req;

    const token = this.ses.getToken();

    if (token != null) {
      authReq = req
      .clone(
        {
          headers: req.headers.set(
            TOKEN_HEADER_KEY, 
            `Bearer ${token}`
            )
        }
      );
    }

    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
];



