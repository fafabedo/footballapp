import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {Country} from '@app/api-platform/interfaces/country';

@Injectable()
export class CountryService {
    constructor(private http: HttpClient,
                private apiPlatform: ApiPlatformService) {
    }

    getCountries(showAll: boolean = false, showOnlyActives: boolean = false): Observable<Country[]> {
        const url = this.apiPlatform.getApiPlatformResource('countries');
        const params = new HttpParams().set('pagination', (showAll ? 'false' : 'true'));
        return this.http.get<Country[]>(url, {params: params})
            .catch(err => this.handleError(err));
    }

    getCountry(countryId: number): Observable<Country> {
        const url = this.apiPlatform.getApiPlatformResource('countries/' + countryId);
        return this.http.get<Country>(url)
            .catch(err => this.handleError(err));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }
}
