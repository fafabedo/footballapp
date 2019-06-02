import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {TeamType} from '@app/api-platform/interfaces/teamtype';

@Injectable()
export class TeamTypeService {
    constructor(private http: HttpClient,
                private apiPlatform: ApiPlatformService) {}

    getTeamTypes(): Observable<TeamType[]> {
        const url = this.apiPlatform.getApiPlatformResource('team_types');
        return this.http.get<TeamType[]>(url)
            .catch(err => this.handleError(err));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }
}
