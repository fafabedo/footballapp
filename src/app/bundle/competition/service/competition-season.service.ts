import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competition} from '@app/api-platform/interfaces/competition';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';

@Injectable()
export class CompetitionSeasonService {
  constructor(private http: HttpClient,
              private apiPlatform: ApiPlatformService) {
  }

  getCompetitionSeasonTable(competitionSeasonId: number): Observable<Competition[]> {
    const url = this.apiPlatform.getApiPlatformResource('competition_season_tables');
    const params = {pagination: 'false'};
    if (competitionSeasonId) {
      params['competition_season.id'] = competitionSeasonId;
    }
    return this.http.get<Competition[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  getCompetitionSeasonTeams(competitionSeasonId: number): Observable<CompetitionSeasonTeam[]> {
    const url = this.apiPlatform.getApiPlatformResource(`competition_seasons/${competitionSeasonId}/competition_season_teams`);
    const params = {pagination: 'false'};
    return this.http.get<CompetitionSeasonTeam[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  handleError(error: any) {
    console.error(error);
    return Observable.of(error.message || error);
  }
}
