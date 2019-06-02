import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Homepage} from '../model/homepage.model';


@Injectable()
export class HomepageService {

    constructor(private http: HttpClient) {
    }

    getHomepage(): Observable<Homepage[]> {
        const url = '/rest/api/v1/homepage?_format=hal_json';

        return this.http.get<Homepage[]>(url)
            .catch(err => this.handleError(err));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }


}
