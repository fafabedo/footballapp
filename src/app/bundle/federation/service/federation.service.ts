import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {Federation} from '@app/api-platform/interfaces/federation';

@Injectable()
export class FederationService {
    constructor(private http: HttpClient,
                private apiPlatform: ApiPlatformService) {}

    getFederations(): Observable<Federation[]> {
        const url = this.apiPlatform.getApiPlatformResource('federations');
        return this.http.get<Federation[]>(url)
            .catch(err => this.handleError(err));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }
}
