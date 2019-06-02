import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from '@app/api-platform/interfaces/team';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';

@Injectable()
export class TeamService {
    constructor(private http: HttpClient,
                private apiPlatform: ApiPlatformService) {}

    getTeams(countryId: any = null, teamType: any = null): Observable<Team[]> {
        const url = this.apiPlatform.getApiPlatformResource('teams');
        const params = {'pagination': 'false'};
        if (countryId) {
            params['country.id'] = countryId.toString();
        }
        if (teamType) {
            params['team_type.id'] = teamType.toString();
        }
        return this.http.get<Team[]>(url, {params: params})
            .catch(err => this.handleError(err));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }
}
