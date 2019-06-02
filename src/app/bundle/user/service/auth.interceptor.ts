import {Injectable, Injector} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import {UserService} from "./user.service";
import {SettingsService} from "../../../core/settings/settings.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private inj: Injector) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const auth = this.inj.get(UserService);
        const settings = this.inj.get(SettingsService);
        if (auth.session
            && auth.session.access_token
            && request.url != '/rest/oauth/token') {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${auth.session.access_token}`
                }
            });
        }
        return next.handle(request)
            .do(evt => {
                if (settings.app.debug) {
                    if (evt instanceof HttpResponse) {
                        console.log('---> status:', evt.status);
                        console.log('---> filter:', request.params);
                    }
                }
            });

    }

}