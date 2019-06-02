import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {SettingsService} from '../../../core/settings/settings.service';

import {PARAMS} from './auth.params';


@Injectable()
export class UserService {
    public session: any;
    private keyCookie = 'SESSF00T';

    route: any;

    constructor(private http: HttpClient,
                private router: Router,
                private settings: SettingsService) {

        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // const timer = this.settings.authentication.checkExpireany;
                // const checker = Observable.timer(500, timer);
                // checker.subscribe(value => {
                //     if (event.url !== '/login') {
                //         this.consoleLog('checking...');
                //         if (!this.isanyValid()) {
                //             this.router.navigate(['login']);
                //         }
                //     }
                // });
            }
        });


    }

    login(user: any): Observable<any> {
        const url = '/rest/oauth/token';

        const postData = new FormData();
        postData.append('grant_type', PARAMS.grant_type_passwd);
        postData.append('client_id', PARAMS.client_id);
        postData.append('client_secret', PARAMS.client_secret);
        postData.append('username', user.username);
        postData.append('password', user.password);

        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post<any>(url, postData, {
            headers: headers
        })
            .catch(err => this.handleError(err));
    }

    refresh(session: any): Observable<any> {
        const url = '/rest/oauth/token';

        const postData = new FormData();
        // this.consoleLog(session);
        postData.append('grant_type', PARAMS.grant_type_refresh);
        postData.append('refresh_token', session.refresh_token);
        postData.append('client_id', PARAMS.client_id);
        postData.append('client_secret', PARAMS.client_secret);

        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post<any>(url, postData, {
            headers: headers
        })
            .catch(err => this.handleError(err));
    }

    getUserInformation(username: string): Observable<any[]> {
        const url = '/rest/api/v1/user/';

        return this.http.get<any[]>(url + username + '?_format=json')
            .catch(err => this.handleError(err));
    }

    authany(session: any) {
        const expiresAt = new Date();
        expiresAt.setMilliseconds(expiresAt.getMilliseconds() + parseInt(session.expires_in));
        // this.consoleLog('any set it will expire at:' + expiresAt.toString());
        session.expires_at = expiresAt.getTime();
        if (this.session.user) {
            session.user = this.session.user;
        }
        this.session = session;
        const stringifyany = JSON.stringify(session);
        localStorage.setItem(this.keyCookie, stringifyany);
    }

    isanyValid() {
        if (!this.session) {
            this.consoleLog('No session found then getting from storage...');
            this.session = this.getanyLocalStorage();
        }
        if (!this.session) {
            this.consoleLog('Still non session...');
            return false;
        }
        const now = new Date();
        this.consoleLog('Now: ' + now.toString() + '...');
        const marginRefresh = this.settings.authentication.marginRefresh;
        const expirationTime = new Date();
        expirationTime.setTime(this.session.expires_at);
        this.consoleLog('token valid until: ' + expirationTime.toString() + '...');

        const refreshTime = new Date();
        refreshTime.setTime(this.session.expires_at);
        refreshTime.setMilliseconds(expirationTime.getMilliseconds() - marginRefresh);

        this.consoleLog('refresh token due at: ' + refreshTime.toString() + '...');
        if (now <= expirationTime && now >= refreshTime) {
            this.consoleLog('refreshing token...');
            return this.refreshToken();
        }
        if (now >= expirationTime) {
            this.consoleLog('any expired...');
            return false;
        }

        return true;
    }

    refreshToken() {
        if (!this.session) {
            return false;
        }
        this.refresh(this.session)
            .subscribe(
                session => this.authany(session),
                err => this.handleNonAuthorized(err));
        return true;
    }

    deleteany() {
        this.session = null;
        localStorage.setItem(this.keyCookie, '');
    }

    getanyLocalStorage() {
        const stringifyany = localStorage.getItem(this.keyCookie);
        if (!stringifyany) {
            return '';
        }
        return JSON.parse(stringifyany);
    }


    handleNonAuthorized(response: any): Promise<any> {
        if (response.error && response.error.code === 401) {
            // this.consoleLog('Unauthorized');
            this.router.navigate(['/login']);
            return Promise.resolve(response);
        }
        return this.handleError(response);
    }

    handleError(error: any): Promise<any> {
        // console.error('User service: An error occurred', error);
        return Promise.reject(error.message || error);
    }

    consoleLog(msg) {
        if (this.settings.app.debug == true) {
            console.log(msg);
        }
    }
}

