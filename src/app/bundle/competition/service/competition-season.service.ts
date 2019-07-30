import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {CompetitionSeasonMatch} from '@app/api-platform/interfaces/competitionseasonmatch';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';
import {CompetitionSeasonTable} from '@app/api-platform/interfaces/competitionseasontable';

@Injectable()
export class CompetitionSeasonService {
  constructor(private http: HttpClient,
              private apiPlatform: ApiPlatformService) {
  }

  get(competitionSeasonId: string): Observable<CompetitionSeason> {
    const url = this.apiPlatform.getApiPlatformResource(
      `competition_seasons/${competitionSeasonId}`);
    return this.http.get<CompetitionSeason>(url)
      .catch(err => this.handleError(err));
  }

  getCompetitionSeasons(competitionId?: string): Observable<CompetitionSeason[]> {
    const url = this.apiPlatform.getApiPlatformResource(`competitions/${competitionId}/competition_seasons`);
    let params = {};
    if (competitionId) {
      params = {pagination: 'true'};
    }
    return this.http.get<CompetitionSeason[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  getCompetitionSeasonTable(competitionId: string, competitionSeasonId: string): Observable<CompetitionSeasonTable[]> {
    const url = this.apiPlatform.getApiPlatformResource(
      `competitions/${competitionId}/competition_seasons/${competitionSeasonId}/competition_season_tables`);
    const params = {pagination: 'false'};
    if (competitionSeasonId) {
      params['competition_season.id'] = competitionSeasonId;
    }
    return this.http.get<CompetitionSeasonTable[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  getCompetitionSeasonTeams(competitionId: string, competitionSeasonId: string): Observable<CompetitionSeasonTeam[]> {
    const url = this.apiPlatform.getApiPlatformResource(
      `competitions/${competitionId}/competition_seasons/${competitionSeasonId}/competition_season_teams`);
    const params = {pagination: 'false'};
    return this.http.get<CompetitionSeasonTeam[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  getCompetitionSeasonMatches(competitionId: string, competitionSeasonId: string): Observable<CompetitionSeasonMatch[]> {
    const url = this.apiPlatform.getApiPlatformResource(
      `competitions/${competitionId}/competition_seasons/${competitionSeasonId}/competition_season_matches`);
    const params = {pagination: 'false'};
    return this.http.get<CompetitionSeasonMatch[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  handleError(error: any) {
    console.error(error);
    return Observable.of(error.message || error);
  }
}
