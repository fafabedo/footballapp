import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competition} from '@app/api-platform/interfaces/competition';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';

@Injectable()
export class CompetitionService {
    constructor(private http: HttpClient,
                private apiPlatform: ApiPlatformService) {}

    getCompetitions(countryId?: any): Observable<Competition[]> {
        const url = this.apiPlatform.getApiPlatformResource('competitions');
        const params = {pagination: 'false'};
        if (countryId) {
            params['country.id'] = countryId;
        }
        return this.http.get<Competition[]>(url, {params})
            .catch(err => this.handleError(err));
    }

    get(id: any): Observable<Competition> {
      const url = this.apiPlatform.getApiPlatformResource('competitions/' + id);
      return this.http.get<Competition>(url)
        .catch(err => this.handleError(err));
    }

    put(competition: Competition): Observable<Competition> {
      const url = this.apiPlatform.getApiPlatformResource('competitions/' + competition.id);
      return this.http.put<Competition>(url, competition)
        .catch(err => this.handleError(err));
    }

    setActive(competition: Competition): void {
      localStorage.setItem('competition', JSON.stringify(competition));
    }

    getActive(): Competition {
      const strCompetition = localStorage.getItem('competition');
      if (!strCompetition) {
        return null;
      }
      return JSON.parse(strCompetition);
    }

    unsetActive(): void {
      localStorage.removeItem('competition');
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }
}
