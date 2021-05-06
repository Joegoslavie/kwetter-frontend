import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forwardRef, Inject, Injectable} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RequestInjector implements HttpInterceptor {

  constructor(@Inject(forwardRef(() => AuthService)) private service: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authToken = this.service.getToken();
    let request: HttpRequest<any>;

    if (authToken) {
        request = req.clone({headers: req.headers.set('Authorization', authToken)});
    } 
    else {
        request = req.clone();
    }
    return next.handle(request);
  }
}
