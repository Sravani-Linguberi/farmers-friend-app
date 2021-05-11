import { RegisterService } from './../register.service';
import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
//import {isNullOrUndefined} from "util";

@Injectable()
export class UserRequestInterceptor implements HttpInterceptor {
  constructor(private authService: RegisterService){

  }

  // interceptor transforms an outgoing request before passing it to the next interceptor
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // get the users access token using our helper function
    const accessToken = this.authService.getAccessToken();

    // in case it isn't set
    if(accessToken === null || accessToken === undefined)
      return next.handle(req);

    // set the header
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });
    return next.handle(req);
  }
}