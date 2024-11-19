import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/authService.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = window.localStorage.getItem("jwt-token");
    console.log("token", token)
    if (!request.url.includes("/auth/login") && token) {
      let newRequest = request.clone({
        headers : request.headers.set('Authorization', 'Bearer ' + token)
      })
      return next.handle(newRequest);
    } else return next.handle(request);
  }
}
